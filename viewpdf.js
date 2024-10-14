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

// Inizializza il menu al caricamento della pagina
initializeMenu();

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

// Gestione della chiusura del PDF cliccando sull'area opaca
document.getElementById('pdfContainer').addEventListener('click', function (event) {
    if (event.target === this) {
        closePDF();
    }
});
