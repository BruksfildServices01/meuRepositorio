let clickCounter = 0;
    const btnSaibaMais = document.getElementById('btnSaibaMais');
    const overlay = document.getElementById('overlay');
    const overlayContent = document.querySelector('.overlay-content');

    btnSaibaMais.addEventListener('click', function() {
      clickCounter++;
      if (clickCounter === 2) {
        overlay.style.display = 'block';
        clickCounter = 0;
      }
    });

    document.addEventListener('click', function(event) {
      if (event.target === overlay) {
        overlay.style.display = 'none';
      }
    });