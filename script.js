// Hamburger/Fixed Navbar
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const menuItem = document.querySelectorAll(".menu_item");
  const hamburger = document.querySelector(".hamburger");
  const body = document.body;

  // Fixed Navbar Offset
  const navbarHeight = document.querySelector(".navbar").offsetHeight;

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    });
  });

  // FAQ Toggle
  const toggles = document.querySelectorAll(".faq-toggle");
  toggles.forEach((e) => {
    e.addEventListener("click", () => {
      e.parentNode.classList.toggle("faq-active");
    });
  });

  // Hamburger Menu
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active"),
      menu.classList.toggle("menu_active");
    body.classList.toggle("no-scroll");
  }),
    menuItem.forEach((item) => {
      item.addEventListener("click", () => {
        hamburger.classList.toggle("hamburger_active"),
          menu.classList.toggle("menu_active");
        body.classList.remove("no-scroll");
      });
    }),
    dropdownLinks.forEach((item) => {
      item.addEventListener("click", () => {
        hamburger.classList.toggle("hamburger_active"),
          menu.classList.toggle("menu_active");
        body.classList.remove("no-scroll");
      });
    });
});

// Top Scroll
// When the user scrolls down 900px from the top of the document, show the button
const scrollToTopBtn = document.querySelector(".pageup");
const navbarFluid = document.querySelector(".navbar-fluid");

window.onscroll = function () {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;

  scrollToTopBtn.style.display = scrollTop > 900 ? "block" : "none";
  // navbarFluid.style.backgroundColor =
  //   scrollTop > 300 ? "rgba(252, 251, 250, 1)" : "rgba(252, 251, 250, 0.9)";
};

// Smooth scrolling
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Form validation
function validateForm() {
  var email = document.getElementById("email").value;
  var emailError = document.getElementById("emailError");
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    emailError.textContent = "Invalid email address";
    return false;
  } else {
    emailError.textContent = "";
  }
  return true;
}
