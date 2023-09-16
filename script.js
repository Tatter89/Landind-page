const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");

/* // FAQ Button

const faqBoxes = document.querySelectorAll(".faq-box");
const faqIcons = document.querySelectorAll(".fa-chevron-down");

faqBoxes.forEach((faqBox) => {
  faqBox.addEventListener("click", (event) => {
    faqBox.classList.toggle("active");
  });
}); */

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
    nav.style.paddingTop = "15px";
    nav.style.paddingBottom = "15px";
  } else {
    nav.style.paddingTop = "5px";
    nav.style.paddingBottom = "5px";
  }
  previousScrollPosition = currentScrollPosition;
};

document.addEventListener("scroll", displayNavOnScroll);

// Dragable slider

/* const carousel = document.querySelector(".carousel"),
  firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false,
  isDragging = false,
  prevPageX,
  prevSrollLeft,
  positionDiff;

const showHideIcons = () => {
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display =
    carousel.scrollLeft == scrollWidth ? "none" : "block";
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 14;
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60);
  });
});

const autoSlide = () => {
  if (carousel.scrollLeft == carousel.scrollWidth - carousel.clientWidth)
    return;

  positionDiff = Math.abs(positionDiff);
  let firstImgWidth = firstImg.clientWidth + 14;
  let valDifference = firstImgWidth - positionDiff;

  if (carousel.scrollLeft > prevSrollLeft) {
    return (carousel.scrollLeft +=
      positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
  }
  carousel.scrollLeft -=
    positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
};

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevSrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  carousel.classList.add("dragging");
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevSrollLeft - positionDiff;
  showHideIcons();
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");

  if (!isDragging) return;
  isDragging = false;
  autoSlide();
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop); */

const wrapper = document.querySelector(".wrapper");

let pressed = false;
let startX = 0;

wrapper.addEventListener("mousedown", function (e) {
  pressed = true;
  startX = e.clientX;
  this.style.cursor = "grabbing";
});

wrapper.addEventListener("mouseleave", function (e) {
  pressed = false;
});

window.addEventListener("mouseup", function (e) {
  pressed = false;
  wrapper.style.cursor = "grab";
});

wrapper.addEventListener("mousemove", function (e) {
  if (!pressed) {
    return;
  }

  this.scrollLeft += startX - e.clientX;
});
