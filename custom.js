/* Seçim İşlemleri Başlangıç */
let b1 = document.getElementsByClassName("b1")[0];
let b2 = document.getElementsByClassName("b2")[0];
let b3 = document.getElementsByClassName("b3")[0];
let d1 = document.getElementsByClassName("d1")[0];
let d2 = document.getElementsByClassName("d2")[0];
/* Seçim İşlemleri Bitiş */

b1.addEventListener("click", goster);
function goster() {
  //d1.style.display = "block";
  d1.classList.add("goster");
  d1.classList.remove("gizle");
  d2.classList.add("goster");
  d2.classList.remove("gizle");
}
b2.addEventListener("click", gizle);
function gizle() {
  //d1.style.display = "none";
  d1.classList.add("gizle");
  d1.classList.remove("goster");
  d2.classList.add("gizle");
  d2.classList.remove("goster");
}

b3.addEventListener("click", gecis);
function gecis() {
  d1.classList.toggle("gecis");
  d2.classList.toggle("gecis");
}
