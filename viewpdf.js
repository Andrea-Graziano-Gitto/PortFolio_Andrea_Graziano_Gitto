// Funzione per gestire l'apertura e la chiusura del menu
const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
const closeSidebarBtn = document.getElementById('close-sidebar-btn');
const body = document.body;

// Funzione per controllare se lo schermo è mobile
function isMobile() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    // Controlla se il dispositivo è Android, iPhone, iPad o iPod
    if (/android/i.test(userAgent) || /iPhone|iPad|iPod/i.test(userAgent)) {
        return true;
    }

    // Controlla se la larghezza dello schermo è quella tipica dei dispositivi mobili
   

    return false;
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

function downloadPDF() {
    const downloadLink = document.createElement('a');
    downloadLink.href = 'assets/CV - Andrea Graziano Gitto.pdf'; // Il percorso del file
    downloadLink.download = 'CV - Andrea Graziano Gitto.pdf'; // Nome del file scaricato
    document.body.appendChild(downloadLink); // Aggiungi il link al body
    downloadLink.click(); // Simula il clic per scaricare
    document.body.removeChild(downloadLink); // Rimuovi il link dal body
}

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

// Aggiunta della logica per distinguere tra mobile e desktop per il pulsante "View CV"
document.getElementById('viewCvBtn').addEventListener('click', function() {
    // Scarica il PDF solo al clic
    if(isMobile())
    {
 downloadPDF();
    }
    else
    {
   openPDF();
    }
});


// Funzione per far partire il download del PDF

