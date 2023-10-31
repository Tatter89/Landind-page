// scrolling with buttons
const upButton = document.querySelector(".scrollButton");
const downButton = document.querySelector(".downButton");
const scrollPageTo = (x = 0, y = 0) => window.scrollTo(x, y);

const scrollButtonHandler = (event, scrollOffset = 600) => {
  if (window.scrollY > scrollOffset) {
    // show up button
    upButton.classList.add("active");
    if (downButton) downButton.classList.add("hidden");
  } else {
    // hide up button || show down button
    upButton.classList.remove("active");
    if (downButton) downButton.classList.remove("hidden");
  }
};

if (downButton) {
  downButton.addEventListener("click", () => {
    scrollPageTo(0, 1000);
  });
}
upButton.addEventListener("click", scrollPageTo);
window.addEventListener("scroll", scrollButtonHandler);
window.addEventListener("DOMContentLoaded", scrollButtonHandler);
