// Language switch
const langBtn = document.getElementById("btn");
const downloadEng = document.querySelector(".download-btn-eng");
const downloadHun = document.querySelector(".download-btn-hun");
const cvEng = document.querySelector(".cv-eng");
const cvHun = document.querySelector(".cv-hun");

function leftClick() {
  langBtn.style.left = "0";
  downloadEng.style.display = "none";
  downloadHun.style.display = "block";
  cvEng.style.display = "none";
  cvHun.style.display = "block";
}

function rightClick() {
  langBtn.style.left = "110px";
  downloadEng.style.display = "block";
  downloadHun.style.display = "none";
  cvEng.style.display = "block";
  cvHun.style.display = "none";
}
