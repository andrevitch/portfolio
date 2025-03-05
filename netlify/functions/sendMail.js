exports.handler = async (event) => {
  const { name, email, phone, message } = JSON.parse(event.body);

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing required fields." }),
    };
  }

  // Replace with your email sending logic (e.g., SendGrid, Mailgun, Resend)
  console.log(`Email from ${name} (${email}, ${phone}): ${message}`);

  return {
    statusCode: 200,
    body: JSON.stringify({ success: "Message sent successfully!" }),
  };
};
