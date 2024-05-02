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
      }, 750);
  }
  setTimeout(() => {
    const loadingScreen = document.getElementById("loadingScreen");
    loadingScreen.style.display = "none";
  }, 1100);
};
showMenu.addEventListener("click", () => {
  navUL.classList.add("show");
  closeButton.classList.add("close");
  closeButton.innerHTML = "X";
  closeButton.classList.add("close-button");
  closeContainer.appendChild(closeButton);
  closeButton.addEventListener("click", () => {
    navUL.classList.remove("show");
    closeButton.classList.remove("close");
    closeButton.innerHTML = "";
  });
});
hideMain.addEventListener("click", () => {
  navUL.classList.remove("show");
  closeButton.classList.remove("close");
  closeButton.innerHTML = "";
});
hideFooter.addEventListener("click", () => {
  navUL.classList.remove("show");
  closeButton.classList.remove("close");
  closeButton.innerHTML = "";
});