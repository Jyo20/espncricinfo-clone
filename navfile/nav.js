window.onscroll = function () {
  myFunction();
};

let navbar = document.getElementById("lower");
let sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// function myFunction() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");
//   let navchange = document.getElementById("upper");
//   let mid = document.getElementById("mid");
//   let low = document.getElementById("lower");
//   navchange.classList.toggle("dark-mode");
//   let geta = document.querySelector("#mid > div");
//   mid.classList.toggle("dark-mode");
//   low.classList.toggle("dark-mode");
//   geta.classList.toggle("dark-mode");
// }
