
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
              // Funzione per gestire l'apertura e la chiusura del menu
            const toggleBtn = document.getElementById('toggle-btn');
            const sidebar = document.getElementById('sidebar');
            const closeSidebarBtn = document.getElementById('close-sidebar-btn');
            const body = document.body;

            // Funzione per controllare se lo schermo è mobile
            function isMobile() {
                return window.innerWidth <= 768;
            }

            // Imposta lo stato iniziale del menu
            if (isMobile()) {
                sidebar.classList.add('hidden'); // Chiudi il menu su mobile
                toggleBtn.style.display = 'block'; // Mostra il pulsante su mobile
                body.classList.remove('body-compressed'); // Non comprimere il body su mobile
            } else {
                sidebar.classList.remove('hidden'); // Mantieni il menu aperto su desktop
                toggleBtn.style.display = 'none'; // Nascondi il pulsante su desktop
                body.classList.add('body-compressed'); // Comprimi il body su desktop
            }

            // Aggiungi l'evento click al pulsante toggle
            toggleBtn.addEventListener('click', () => {
                sidebar.classList.toggle('hidden');

                if (!sidebar.classList.contains('hidden')) {
                    toggleBtn.style.display = 'none'; // Nascondi il pulsante se il menu è aperto
                    body.classList.add('body-compressed'); // Comprimi il body
                } else {
                    toggleBtn.style.display = 'block'; // Mostra il pulsante se il menu è chiuso
                    body.classList.remove('body-compressed'); // Ripristina il body
                }
            });

            // Funzione per chiudere la sidebar
            closeSidebarBtn.addEventListener('click', () => {
                sidebar.classList.add('hidden'); // Nascondi la sidebar
                toggleBtn.style.display = 'block'; // Mostra il pulsante toggle
                body.classList.remove('body-compressed'); // Ripristina il body
            });

            // Funzione per aprire il PDF
            function openPDF() {
                document.getElementById('pdfContainer').style.display = 'flex';
            }

            // Funzione per chiudere il PDF
            function closePDF() {
                document.getElementById('pdfContainer').style.display = 'none';
            }


            
        });
    });
    
  