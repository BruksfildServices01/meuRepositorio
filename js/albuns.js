let currentPosition = 0;

function moveAlbum(direction) {
  const albumsContainer = document.getElementById('albums-container');
  const children = albumsContainer.children;

  if (direction === 'next' && currentPosition < children.length - 1) {
    currentPosition++;
  } else if (direction === 'prev' && currentPosition > 0) {
    currentPosition--;
  }

  albumsContainer.style.transform = `translateX(-${currentPosition * 400}px)`;
}

document.getElementById('prev').addEventListener('click', () => {
  moveAlbum('prev');
});

document.getElementById('next').addEventListener('click', () => {
  moveAlbum('next');
});

fetch('http://localhost:3000/albums')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    return response.json();
  })
  .then(imageUrls => {
    console.log(imageUrls);
    const albumsContainer = document.getElementById('albums-container');
    imageUrls.forEach((imageUrl, index) => {
      const col = document.createElement('div');
      col.classList.add('col');

      const img = document.createElement('img');
      img.src = `http://localhost:3000${imageUrl}`;
      img.alt = `Imagem do álbum ${index + 1}`;
      img.style.maxWidth = '400px';

      col.appendChild(img);
      albumsContainer.appendChild(col);
    });
  })
  .catch(error => {
    console.error('Erro ao buscar álbuns:', error);
  });
