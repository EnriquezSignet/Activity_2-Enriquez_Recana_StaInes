let login = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
  login.classList.toggle("active");
  navbar.classList.remove("active");
};

let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  login.classList.remove("active");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  login.classList.remove("active");
  navbar.classList.remove("active");
};

function toggleMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
}

function checkScreenWidth() {
  const windowWidth = window.innerWidth;

  if (windowWidth > 768) {
    const navbar = document.getElementById("navbar");
    navbar.classList.remove("active");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".slide-container", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });
});
