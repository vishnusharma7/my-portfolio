    // Function to open the review popup
    function openReviewPopup() {
        const reviewPopup = document.querySelector('.review-popup');
        reviewPopup.style.display = 'flex';
    }
    
    // Function to close the review popup
    function closeReviewPopup() {
        const reviewPopup = document.querySelector('.review-popup');
        reviewPopup.style.display = 'none';
    }
    
    
    // Function to handle cancel button click
    function cancelReview() {
        closeReviewPopup();
    }
    
    // Function to handle form submission
   // Function to handle form submission
function submitReview(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    const yourName = document.getElementById('your-name').value;
    const yourRelation = document.getElementById('your-relation').value;
    const reviewMessage = document.getElementById('review-message').value;
    
    // Create a new testimonial div and populate it with the submitted data
    const testimonialContainer = document.querySelector('.testimonial-slider.swiper-wrapper');
    const newTestimonial = document.createElement('div');
    newTestimonial.className = 'testimonial__container swiper-slide';
    newTestimonial.innerHTML = `
        <p class="testimonial__description">${reviewMessage}</p>
        <div>
            <h3 class="testimonial__name">${yourName}</h3>
            <span class="testimonial__subtitle">${yourRelation}</span>
        </div>
    `;
    
    // Append the new testimonial to the testimonial container
    testimonialContainer.appendChild(newTestimonial);
    
    // Close the popup
    closeReviewPopup();
}

    
    // Add event listeners for the "Write a Review" button and form submission
    document.addEventListener('DOMContentLoaded', function () {
        const writeReviewButton = document.querySelector('.write-review-button');
        const reviewForm = document.querySelector('.review-form');
        const closeButton = reviewForm.querySelector('.close-button');
        const submitButton = reviewForm.querySelector('button[type="submit"]');
        
        const cancelButton = document.querySelector('.cancel-button');
        cancelButton.addEventListener('click', cancelReview);
        // Close the popup
        writeReviewButton.addEventListener('click', openReviewPopup);
        closeButton.addEventListener('click', closeReviewPopup);
        reviewForm.addEventListener('submit', submitReview);
    });
    

   