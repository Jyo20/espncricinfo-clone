import { navbar } from "./navbaar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();
console.log(navbar_div);

//Team page
document.querySelector("#a2").addEventListener("click", divfun);
function divfun() {
  window.location.href = "australia.html";
}
document.querySelector("#a1").addEventListener("click", divfun2);
function divfun2() {
  window.location.href = "australia.html";
}
