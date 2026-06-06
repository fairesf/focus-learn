document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.querySelector('.progress__bar');
    
    
    if (progressBar) {
        progressBar.style.width = '66.66%'; 
    } else {
        console.error("Elemento '.progress__bar' não encontrado.");
    }
});