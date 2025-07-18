const typed = new Typed("#typed", {
  strings: ["a Front-End Developer", "a React Developer", "a MERN Stack Developer"],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true
});

// Scroll-to-top button functionality
const scrollTopBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Mobile navigation toggle
const navToggle = document.querySelector(".mobile-nav-toggle span");
const navbar = document.getElementById("navbar");

navToggle.addEventListener("click", () => {
  navbar.classList.toggle("open-nav");
});