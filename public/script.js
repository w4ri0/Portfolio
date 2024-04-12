/* This JavaScript code snippet is responsible for creating a navigation menu functionality with a
show/hide feature and a close button. Here is a breakdown of what the code does: */
const navUL = document.querySelector(".navUL"),
  showMenu = document.querySelector(".show-menu"),
  closeButton = document.createElement("button");
window.onload = function () {
  setTimeout(() => {
    const loadingScreen = document.getElementById("loadingScreen");
    setTimeout(() => {
      loadingScreen.classList.add("zoomOut");
    }, 400);
  }, 400);
  setTimeout(() => {
    const loadingScreen = document.getElementById("loadingScreen");
    loadingScreen.style.display = "none";
  }, 1100);
};

showMenu.addEventListener("click", () => {
  showMenu.style.display = "none"; // Hide the show-menu element
  navUL.style.display = "block";
  navUL.style.margin = "0 auto"; // Center the navUL element
  navUL.style.background = "white"; // Add a background color to navUL
  navUL.style.padding = "50%"; // Remove any existing padding
  navUL.style.margin = "0"; // Remove any existing margin
  navUL.style.width = "100%"; // Set the width to 100% to take the whole page
  navUL.style.boxSizing = "border-box"; // I
  // Create and append the modal closing button
  const closeButton = document.createElement("button"); // Create the closing button element
  closeButton.innerText = "+";
  closeButton.classList.add("close"); // Add the "close" class to the closing button
  closeButton.style.position = "absolute";
  closeButton.style.top = "10px";
  closeButton.style.right = "10px";
  navUL.appendChild(closeButton); // Append the closing button to the navUL element
  closeButton.addEventListener("click", () => {
    navUL.style.display = "none";
    showMenu.style.display = "block";
    navUL.appendChild(closeButton);
  });
});
