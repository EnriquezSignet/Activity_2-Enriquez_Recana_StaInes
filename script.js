function toggleMenu() {
  const navbarElement = document.getElementById("navbar");
  navbarElement.classList.toggle("active");
}

function closeMenu() {
  const navbarElement = document.getElementById("navbar");
  navbarElement.classList.remove("active");
}

window.onscroll = () => {
  closeMenu(); // Close the menu when scrolling
};

function checkScreenWidth() {
  const windowWidth = window.innerWidth;

  if (windowWidth > 768) {
    closeMenu(); // Close the menu if the screen width is greater than 768
  }
}

let preveiwContainer = document.querySelector(".cats_preview");
let previewBox = preveiwContainer.querySelectorAll(".preview");

document.querySelectorAll(".cats_container .breed_pic").forEach((breed_pic) => {
  breed_pic.onclick = () => {
    preveiwContainer.style.display = "flex";
    let name = breed_pic.getAttribute("data-name");
    previewBox.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});

previewBox.forEach((close) => {
  close.querySelector(".fa-times").onclick = () => {
    close.classList.remove("active");
    preveiwContainer.style.display = "none";
  };
});

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
