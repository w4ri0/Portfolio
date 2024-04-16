const navUL = document.querySelector(".navUL");
const showMenu = document.querySelector(".show-menu");
const closeButton = document.createElement(
  "  button role='button' aria-label='bouton'"
);

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
    }, 450),
    setTimeout(() => {
      const loadingScreen = document.getElementById("loadingScreen");
      loadingScreen.style.display = "none";
    }, 1100);
};

showMenu.addEventListener("click", () => {
  showMenu.style.display = "none";
  navUL.style.display = "block";
  navUL.style.margin = "0 auto";
  navUL.style.background = "white";
  navUL.style.padding = "36%";
  navUL.style.paddingBottom = "80%";
  navUL.style.margin = "0";
  navUL.style.width = "100%";
  navUL.style.boxSizing = "border-box";

  closeButton.innerText = "+";
  closeButton.classList.add("close");
  closeButton.style.position = "absolute";
  closeButton.style.top = "10px";
  closeButton.style.right = "10px";
  navUL.appendChild(closeButton);

  closeButton.addEventListener("click", () => {
    navUL.style.display = "none";
    showMenu.style.display = "block";
    navUL.appendChild(closeButton);
  });
});
