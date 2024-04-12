const navUL = document.querySelector(".navUL"),
  showMenu = document.querySelector(".show-menu");
showMenu.addEventListener("click", () => {
  navUL.classList.contains("fadeout")
    ? (navUL.classList.remove("fadeout"),
      navUL.classList.add("fadein"),
      (navUL.style.display = ""),
      console.log("fade"))
    : navUL.classList.contains("fadein") &&
      (navUL.classList.remove("fadein"),
      navUL.classList.add("fadeout"),
      setTimeout(() => {
        navUL.style.display = "none";
      }, 400),
      console.log("clicked"));
}),
  (window.onload = function () {
    setTimeout(() => {
      const loadingScreen = document.getElementById("loadingScreen");
      setTimeout(() => {
        loadingScreen.classList.add("zoomOut");
      }, 400);
    }, 400),
      setTimeout(() => {
        const loadingScreen = document.getElementById("loadingScreen");
        loadingScreen.style.display = "none";
      }, 1100);
  });
