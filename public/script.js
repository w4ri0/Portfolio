const showMenu = document.querySelector('.show-menu');
const menuBlock = document.querySelector('.menu-block');

// Check if the elements exist
if (showMenu && menuBlock) {
    // Add a click event listener to show/hide the menu block
    showMenu.addEventListener('click', function() {
        // Toggle the visibility of the menu block
        menuBlock.style.display = menuBlock.style.display === 'none' ? 'inline-block' : 'none';
        menuBlock.style.opacity = menuBlock.style.display === 'none' ? '0' : '1';
        menuBlock.style.visibility = menuBlock.style.display === 'none' ? 'hidden' : 'visible';
        menuBlock.style.transition = 'transform 2.5s ease-in-out'; // Add transition property
        menuBlock.style.transform = menuBlock.style.display === 'none' ? 'translateX(-100%)' : 'translateX(0)'; // Add transform property
    });
}
// Add a page loading animation for 3 seconds
window.addEventListener('load', function() {
    const loadingAnimation = document.querySelector('.loading-animation');
    if (loadingAnimation) {
        setTimeout(function() {
            loadingAnimation.style.display = 'none';
        }, 3000);
    }
});