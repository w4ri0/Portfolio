const navUL = document.querySelector(".navUL");
const showMenu = document.querySelector(".show-menu");
const closeButton = document.createElement("button");

window.onload = function () {
  const loadingScreen = document.getElementById("loadingScreen");
  loadingScreen.classList.add("zoomOut");

  setTimeout(() => {
    loadingScreen.style.display = "none";
  }, 1400);
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
