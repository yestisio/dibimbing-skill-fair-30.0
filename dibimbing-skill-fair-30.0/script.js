const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    navLinks.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
  });
});

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

function activateLink(currentSection) {
  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((el) => observer.observe(el));
});
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navMenu = document.querySelector("nav ul");

  hamburgerMenu.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    hamburgerMenu.classList.toggle("active");
  });

  document.addEventListener("click", (event) => {
    if (
      !hamburgerMenu.contains(event.target) &&
      !navMenu.contains(event.target)
    ) {
      navMenu.classList.remove("show");
      hamburgerMenu.classList.remove("active");
    }
  });
});
