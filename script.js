document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.querySelector('.checkbox-menu');
    var buttons = document.querySelectorAll('.glass-button');

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            buttons.forEach(function(button) {
                button.style.display = 'inline-block';
            });
            console.log('checked');
        } else {
            buttons.forEach(function(button) {
                button.style.display = 'none';
            });
            console.log('unchecked');
        }
    });
});