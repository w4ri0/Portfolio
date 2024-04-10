// Get the elements you want to animate
const navUL = document.querySelector(".navUL");
const showMenu = document.querySelector(".show-menu");

// Add the event listener
showMenu.addEventListener("click", () => {
  navUL.style.display = navUL.style.display === "none" ? "inline-flex" : "none";
});

// Hide the loading screen after 3 seconds
//

window.onload = function () {
  // Fade out the loading screen after 3 seconds
  setTimeout(function () {
    document.getElementById("loadingScreen").style.opacity = "0";
    setTimeout(function () {
      document.getElementById("loadingScreen").style.display = "none";
    }, 1000);
  }, 3000);
};
// Toggle the animation
