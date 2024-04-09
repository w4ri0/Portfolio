const showMenu = document.querySelector('.show-menu');
const menuBlock = document.querySelector('.menu-block');

// Check if the elements exist
if (showMenu && menuBlock) {
    // Add a click event listener to show/hide the menu block
    showMenu.addEventListener('click', function() {
        // Toggle the visibility of the menu block
        menuBlock.style.display = menuBlock.style.display === 'none' ? 'inline-flex' : 'none';
        menuBlock.style.opacity = menuBlock.style.display === 'none' ? '0' : '1';
        menuBlock.style.visibility = menuBlock.style.display === 'none' ? 'hidden' : 'visible';
        menuBlock.style.transform = menuBlock.style.display === 'none' ? 'translateX(-100%)' : 'translateX(0)'; 
        // Add transform property
        // Add a click event listener to hide the menu block when clicked outside
        document.addEventListener('click', function(event) {
            if (!menuBlock.contains(event.target) && menuBlock.style.display !== 'none') {
                menuBlock.style.display = 'none';
                menuBlock.style.opacity = '0';
                menuBlock.style.visibility = 'hidden';
                menuBlock.style.transform = 'translateX(-100%)';
            }
        });

    });
}
// Add a page loading animation for 3 seconds

// JavaScript
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.display = 'none';

    // Add a delay of 3 seconds before showing the rest of the page
    setTimeout(function() {
        document.body.style.visibility = 'visible';
    }, 3000);
});
