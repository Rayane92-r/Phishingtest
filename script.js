document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.login-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        window.location.href = 'result.html'; // Force redirection
    });
});