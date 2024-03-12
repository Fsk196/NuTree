const viewMore = document.getElementById("view-btn");
const category = document.getElementById("category");
const hamburgerMenu = document.querySelector(".hamburger");

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

category.addEventListener("click", function () {
  let dropdownMenu = document.querySelector(".dropdown-menu");
  dropdownMenu.classList.toggle("hidden");
  console.log("button toggled");
});

hamburgerMenu.addEventListener("click", () => {
  let navbarToggler = document.querySelector(".navbar")
  navbarToggler.classList.toggle("hidden")
});
