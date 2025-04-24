// Star rating functionality
const stars = document.querySelectorAll('.star');
const ratingInput = document.getElementById('rating-value');

// Add event listener to each star for clicking
stars.forEach(star => {
    star.addEventListener('click', () => {
        const value = star.getAttribute('data-value');
        ratingInput.value = value;

        // Update the star colors based on the selected rating
        stars.forEach(star => {
            if (star.getAttribute('data-value') <= value) {
                star.classList.add('text-yellow-500');
                star.classList.remove('text-gray-400');
            } else {
                star.classList.add('text-gray-400');
                star.classList.remove('text-yellow-500');
            }
        });
    });
});

// Form submission
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting in the traditional way

    const name = document.querySelector('[name="name"]').value;
    const location = document.querySelector('[name="location"]').value;
    const review = document.querySelector('[name="review"]').value;
    const rating = ratingInput.value;

    // Check if all fields are filled out
    if (name && location && review && rating) {
        // You can send the data to a server here via an API (for now, just alerting)
        alert(`Review Submitted!\nName: ${name}\nLocation: ${location}\nReview: ${review}\nRating: ${rating}`);
        
        // Optionally, reset the form and stars after submission
        document.getElementById('reviewForm').reset();
        stars.forEach(star => {
            star.classList.remove('text-yellow-500');
            star.classList.add('text-gray-400');
        });
        ratingInput.value = '';  // Clear the hidden rating value
    } else {
        alert('Please fill in all fields and select a rating.');
    }
});
