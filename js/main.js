// start nav-bar
let links = document.querySelectorAll(".navbar ul li a");

links.forEach((link) => {
  link.addEventListener("click", function () {
    for (let i = 0; i < links.length; i++) {
      if (links[i].classList.contains("active")) {
        links[i].classList.remove("active");
      }
    }
    link.classList.add("active");
  });
});
// end nav-bar

// start header
let nav = document.querySelector("nav");
let header = document.getElementById("header");
header.style.height = window.innerHeight - nav.clientHeight - 1 + "px";

// end header

// <!-- start shuffle -->
let shuffleBtn = document.querySelectorAll(".shuffle li");
let moreButton = document.querySelector(".more-button");
let morePhotos = document.querySelector(".hidden-photos");
let allPhotos = document.querySelectorAll("div.All");

shuffleBtn.forEach((button) => {
  button.addEventListener("click", function () {
    for (let i = 0; i < shuffleBtn.length; i++) {
      if (shuffleBtn[i].classList.contains("active")) {
        shuffleBtn[i].classList.remove("active");
      }
    }
    button.classList.add("active");
    for (let i = 0; i < allPhotos.length; i++) {
      allPhotos[i].style.display = "none";
      if (allPhotos[i].classList.contains(button.dataset.type)) {
        allPhotos[i].style.display = "block";
      }
    }
  });
});

moreButton.onclick = function () {
  morePhotos.classList.toggle("d-none");
  morePhotos.classList.toggle("opacity");
  if (morePhotos.classList.contains("d-none")) {
    this.innerHTML = "more";
  } else {
    this.innerHTML = "less";
  }
};
// <!-- end shuffle -->
