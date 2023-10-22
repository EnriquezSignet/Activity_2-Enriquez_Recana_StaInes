const navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

function toggleMenu() {
  const navbarElement = document.getElementById("navbar");
  navbarElement.classList.toggle("active");
}

function checkScreenWidth() {
  const windowWidth = window.innerWidth;

  if (windowWidth > 768) {
    const navbarElement = document.getElementById("navbar");
    navbarElement.classList.remove("active");
  }
}

let preveiwContainer = document.querySelector(".cats_preview");
let previewBox = preveiwContainer.querySelectorAll(".preview");

document.querySelectorAll(".cats_container .product").forEach((product) => {
  product.onclick = () => {
    preveiwContainer.style.display = "flex";
    let name = product.getAttribute("data-name");
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
