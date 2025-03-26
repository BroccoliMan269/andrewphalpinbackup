function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth' // Smooth scroll effect
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Get the scroll button element
    const scrollButton = document.getElementById('scrollToSchool');
    
    // Add click event listener
    if (scrollButton) {
        scrollButton.addEventListener('click', function() {
            const schoolArea = document.querySelector('.schoolarea');
            if (schoolArea) {
                schoolArea.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
function scrollGallery(direction) {
    const gallery = document.querySelector('.gallery');
    const scrollAmount = gallery.clientWidth;
    gallery.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
}

// Make buttons follow vertical scroll
window.addEventListener('scroll', function() {
    const galleryContainer = document.querySelector('.gallery-container');
    const buttons = document.querySelectorAll('.nav-button');
    const containerRect = galleryContainer.getBoundingClientRect();
    
    buttons.forEach(button => {
        if (containerRect.top < 0 && containerRect.bottom > window.innerHeight) {
            // Gallery is taller than viewport and partially scrolled
            button.style.top = `${window.innerHeight/2 - containerRect.top}px`;
        } else {
            button.style.top = '50%';
        }
    });
});

