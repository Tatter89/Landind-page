const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");

// Slider
const slides = document.querySelectorAll(".slide");
const slideBtn = document.querySelectorAll(".btn");

// FAQ Button

const faqBoxes = document.querySelectorAll(".faq-box");

faqBoxes.forEach((faqBox) => {
  faqBox.addEventListener("click", (event) => {
    faqBox.classList.toggle("active");
  });
});

/* for (i = 0; i < fayBox.length; i++) {
  faqBox[i].addEventListener("click", function () {
    this.classlist.toggle("active");
  });
} */
/* 
faqBox.addEventListener("click", function () {
  faqBox.classList.add("active");
});
 */
let currentSlide = 1;

const manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
    slideBtn.forEach((btn) => {
      btn.classList.remove("active");
    });
  });

  slides[manual].classList.add("active");
  slideBtn[manual].classList.add("active");
};

slideBtn.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

//Show menu

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");

    showMenu = false;
  }
}

// Nav offset

let previousScrollPosition = window.pageYOffset;

const displayNavOnScroll = () => {
  const currentScrollPosition = window.pageYOffset;
  const nav = document.querySelector(".nav");
  if (previousScrollPosition > currentScrollPosition) {
    nav.style.backgroundColor = "rgba(83, 83, 83, 0.4)";
    nav.style.paddingTop = "15px";
    nav.style.paddingBottom = "15px";
  } else {
    nav.style.backgroundColor = "rgba(83, 83, 83, 0.2)";
    nav.style.paddingTop = "5px";
    nav.style.paddingBottom = "5px";
  }
  previousScrollPosition = currentScrollPosition;
};

document.addEventListener("scroll", displayNavOnScroll);
