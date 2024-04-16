const navUL = document.querySelector(".navUL");
const showMenu = document.querySelector(".show-menu");
const closeButton = document.createElement("button");
const hideMain = document.querySelector("main");
const hideFooter = document.querySelector("footer");
const closeContainer = document.querySelector(".close-container");

window.onload = function () {
  if (document.querySelector(".spinner")) {
    setTimeout(() => {
      const loadingScreen = document.getElementById("loadingScreen");
      setTimeout(() => {
        loadingScreen.classList.add("zoomOut");
      }, 400);
    }, 400),
      setTimeout(() => {
        const allText = document.querySelectorAll(
          "p",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "a",
          "span",
          "li",
          "button"
        );
        allText.forEach((text) => {
          text.classList.add("fadein");
        });
      }, 750),
      setTimeout(() => {
        const loadingScreen = document.getElementById("loadingScreen");
        loadingScreen.style.display = "none";
      }, 1100);
  }
};

showMenu.addEventListener("click", () => {
  closeContainer.appendChild(closeButton);
  navUL.classList.remove("navUL");
  closeButton.classList.remove("close-button");
  showMenu.classList.add("show-menu-hidden");
  navUL.classList.add("navUL-modified");
  closeButton.classList.add("close-button-modified");
  closeButton.innerText = "+";
  closeButton.classList.add("close");
  hideMain.style.display = "none";
  hideFooter.style.display = "none";
});
closeButton.addEventListener("click", () => {
  if (showMenu.classList.contains("show-menu-hidden")) {
    closeContainer.removeChild(closeButton);
    navUL.classList.add("navUL");
    closeButton.classList.add("close-button");
    showMenu.classList.remove("show-menu-hidden");
    navUL.classList.remove("navUL-modified");
    closeButton.classList.remove("close-button-modified");
    closeButton.innerText = "";
    closeButton.classList.remove("close");
    hideMain.style.display = "block";
    hideFooter.style.display = "block";
  }
});
