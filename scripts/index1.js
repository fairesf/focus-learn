document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.querySelector('.progress__bar');
    
    if (progressBar) {
      setTimeout(() => {
        progressBar.style.width = '100%';
      }, 100);
    }
  });