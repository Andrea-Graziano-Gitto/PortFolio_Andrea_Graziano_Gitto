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

function handleButtonClick() {
    // Check if the user is on a mobile device
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        // Initiate a download for mobile users
        const link = document.createElement('a');
        link.href = 'https://github.com/Andrea-Graziano-Gitto/PortFolio_Andrea_Graziano_Gitto/raw/main/CV%20-%20Andrea%20Graziano%20Gitto.pdf'; // Direct download link
        link.download = 'CV - Andrea Graziano Gitto.pdf'; // Set the file name for download
        document.body.appendChild(link); // Append link to the body
        link.click(); // Programmatically click the link to trigger download
        document.body.removeChild(link); // Remove the link after download
    } else {
        // Redirect to the CV page for desktop users
        window.location.href = 'CV.html';
    }
}


