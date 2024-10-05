// Toggle MEnu
let toggleButon = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleButon.onclick = function (e) {
  // Stop Propagation
  e.stopPropagation();

  this.classList.toggle("menu-active");
  tLinks.classList.toggle("open");
};

// Click Any Where Outside Menu And toggle button
document.addEventListener("click", function (e) {
  if (e.target !== toggleButon && e.target !== tLinks) {
    //Check if  MEnu is open
    if (tLinks.classList.contains("open")) {
      tLinks.classList.remove("open");
      toggleButon.classList.remove("menu-active");
    }
  }
});
// Stop Propagation on MEnu
tLinks.onclick = function (e) {
  e.stopPropagation();
};
// Close the menu when a link is clicked
const links = tLinks.querySelectorAll("a"); // Select all links inside the menu
links.forEach((link) => {
  link.onclick = function () {
    tLinks.classList.remove("open");
    toggleButon.classList.remove("menu-active");
  };
});
