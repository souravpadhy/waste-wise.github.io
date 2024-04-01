
document.addEventListener('DOMContentLoaded', function() {
    var donateBtn = document.querySelector('.donate-btn');

    if (donateBtn) {
        donateBtn.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'donate.html'; // Redirect to donate.html page
        });
    }
});






document.addEventListener('DOMContentLoaded', function() {
    var donateForm = document.getElementById('donateForm');

    if (donateForm) {
        donateForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Handle form submission
            alert('Form submitted!'); // Placeholder for form submission handling
        });
    }
});
