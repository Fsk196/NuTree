const viewMore = document.getElementById("view-btn");
const category = document.getElementById("category");
const category2 = document.getElementById("category2");
const hamburgerMenu = document.querySelector(".hamburger");
const hamburgerMenu1 = document.querySelector(".hamburger1");
const icon1 = document.getElementById("icon1");
const icon2 = document.getElementById("icon2");


const toggleView = () => {
  const menu2 = document.getElementById("menu2");
  if (menu2.classList.contains("hidden")) {
    menu2.classList.remove("hidden");
    menu2.classList.add("flex");
    viewMore.textContent = "View Less";
    console.log("Text changed to 'View Less'");
  } else {
    menu2.classList.remove("flex");
    menu2.classList.add("hidden");
    viewMore.textContent = "View More";
    console.log("Text changed to 'View More'");
  }
};

// category.addEventListener("click", () => {
//   let dropdownMenu = document.querySelector(".dropdown-menu");
//   dropdownMenu.classList.toggle("hidden");
//   console.log("button toggled");
// });

// category2.addEventListener("click", () => {
//   let dropdownMenu = document.querySelector(".subnav");
//   dropdownMenu.classList.toggle("hidden");
// });

icon1.addEventListener("click", () => {
  icon1.classList.add("hidden");
  icon2.classList.remove("hidden");
});

icon2.addEventListener("click", () => {
  icon1.classList.remove("hidden");
  icon2.classList.add("hidden");
});

hamburgerMenu.addEventListener("click", () => {
  let navbarToggler = document.querySelector(".navbar");
  navbarToggler.classList.toggle("hidden");
});
hamburgerMenu1.addEventListener("click", () => {
  let navbarToggler = document.querySelector(".navbar");
  navbarToggler.classList.toggle("hidden");
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



// Category Sript
// script.js

// const catBtns = document.querySelectorAll(".cat-btn");

// catBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     btn.classList.add("active");
//   });
// });
