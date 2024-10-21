// Toggle per la sidebar
document.getElementById('toggleSidebar').addEventListener('click', function() { 
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('collapsed');
});

// Mostra il bottone solo se la sidebar è collassata
document.getElementById('showSidebar').addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('collapsed'); // Rimuovi la classe collapsed
});
const imageLink = document.querySelector('.image-link');
const image = document.getElementById('image');

document.querySelectorAll('#carosello2img').forEach(function(img) {
    img.addEventListener('click', function() {
        const link = img.getAttribute('data-link');
        if (link) {
            window.open(link, '_blank'); // Apre il link in una nuova finestra o tab
        }
    });
});


