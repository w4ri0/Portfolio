document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var glassButton = document.getElementById('glass-button');
        if (window.scrollY > 0) {
            glassButton.style.display = 'block';
        } else {
            glassButton.style.display = 'none';
        }
      })});