const navUL = document.querySelector(".navUL");
const showMenu = document.querySelector(".show-menu");
closeButton = document.createElement("button");

window.onload = function () {
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
};

showMenu.addEventListener("click", () => {
  navUL.appendChild(closeButton);
  closeButton.classList.remove("close-button");
  showMenu.classList.add("show-menu-hidden");
  navUL.classList.add("navUL-modified");
  closeButton.classList.add("close-button-modified");
  closeButton.innerText = "+";
  closeButton.classList.add("close");
});
closeButton.addEventListener("click", () => {
  if (showMenu.classList.contains("show-menu-hidden")) {
    navUL.removeChild(closeButton);
    closeButton.classList.add("close-button");
    showMenu.classList.remove("show-menu-hidden");
    navUL.classList.remove("navUL-modified");
    closeButton.classList.remove("close-button-modified");
    closeButton.innerText = "";
    closeButton.classList.remove("close");
  }
});
