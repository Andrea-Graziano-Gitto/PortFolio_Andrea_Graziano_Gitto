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
    if (link) {
        window.open(link, '_blank'); // Open link in new tab
    }
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

        // Move slide based on which button was clicked
        const direction = button.classList.contains('prev') ? -1 : 1; // -1 for prev, 1 for next
        moveSlide(direction, 'slide1');
    });
});

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
function initializeMenu() {
    if (isMobile()) {
        sidebar.classList.add('hidden'); // Chiudi il menu su mobile
        toggleBtn.style.display = 'block'; // Mostra il pulsante su mobile
        body.classList.remove('body-compressed'); // Non comprimere il body su mobile
    } else {
        sidebar.classList.remove('hidden'); // Mantieni il menu aperto su desktop
        toggleBtn.style.display = 'none'; // Nascondi il pulsante su desktop
        body.classList.add('body-compressed'); // Comprimi il body su desktop
    }
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

const viewCvBtn = document.getElementById('viewCvBtn');

// Aggiungi l'evento click al pulsante "View CV"
viewCvBtn.addEventListener('click', () => {
    openPDF(); // Chiama la funzione per aprire il PDF
});


// Funzione per aprire il PDF
function openPDF() {
    if(isMobile())
    {
downloadPDF();
    }
    else
    {
        document.getElementById('pdfContainer').style.display = 'flex';
    }
}

// Funzione per chiudere il PDF
function closePDF() {
    document.getElementById('pdfContainer').style.display = 'none';
}

function downloadPDF() {
    const pdfUrl = 'assets/CV - Andrea Graziano Gitto.pdf'; // Cambia questo con il percorso al tuo file PDF

    fetch(pdfUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.blob(); // Ottieni il blob del PDF
        })
        .then(blob => {
            const url = window.URL.createObjectURL(blob); // Crea un URL per il blob
            const a = document.createElement('a'); // Crea un elemento <a>
            a.style.display = 'none';
            a.href = url; // Imposta l'URL
            a.download = 'NomeDelFile.pdf'; // Nome con cui salvare il file
            document.body.appendChild(a); // Aggiungi l'elemento al body
            a.click(); // Simula un clic per scaricare
            window.URL.revokeObjectURL(url); // Rimuovi l'URL creato
            a.remove(); // Rimuovi l'elemento <a>
        })
        .catch(error => console.error('There was a problem with the download:', error));
}

// Inizializza il menu al caricamento
initializeMenu();
