
    const slides = {
        slide1: document.querySelectorAll('#slide1 img'),
        slide2: document.querySelectorAll('#slide2 img')
    };
    
    const currentSlides = {
        slide1: 0,
        slide2: 0
    };
    
    function showSlide(slideId, index) {
        const slideImages = slides[slideId];
    
        if (index >= slideImages.length) {
            currentSlides[slideId] = 0; // Reset to first slide
        } else if (index < 0) {
            currentSlides[slideId] = slideImages.length - 1; // Last slide
        } else {
            currentSlides[slideId] = index; // Update current index
        }
    
        slideImages.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === currentSlides[slideId]) {
                slide.classList.add('active');
            }
        });
    }
    
    // Handle click on carousel container
    document.querySelector('.carousel-container').addEventListener('click', function() {
        const activeImage = slides['slide1'][currentSlides.slide1];
        const link = activeImage.getAttribute('data-link'); // Get link from data attribute
        window.open(link, '_blank'); // Open link in new tab
    });
    
    function moveSlide(direction, slideId) {
        showSlide(slideId, currentSlides[slideId] + direction);
    }
    
    // Show the first slide on startup
    showSlide('slide1', currentSlides.slide1);
    showSlide('slide2', currentSlides.slide2);
    
    // Prevent clicks on navigation buttons from propagating to container
    document.querySelectorAll('.prev, .next').forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent click from bubbling up to carousel container
        });
    });
  