document.addEventListener('DOMContentLoaded', function(){
    let albumsData = [];

    const JSON_URL = 'https://cse-sgeddis.github.io/csce242/projects/part6/json/albums.json';

    
    fetch(JSON_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Albums loaded successfully:', data);
            albumsData = data;
            displayAlbums();
        })
        .catch(error => {
            console.error('Error loading albums data:', error);
            document.getElementById('pageInfo').textContent = 'Error loading albums';
        });

    function displayAlbums() {
        const grid = document.getElementById('albumGrid');
        grid.innerHTML = '';

        albumsData.forEach(album => {
            const albumCard = document.createElement('div');
            albumCard.className = 'card album-card';
            albumCard.onclick = function() { showAlbumInfo(album); };

            const img = document.createElement('img');
            img.src = album.img_name;
            img.alt = album.title;
            img.width = 316;
            img.height = 316;
            img.loading = 'lazy';

            const titleDiv = document.createElement('div');
            titleDiv.className = 'album-title';
            titleDiv.textContent = album.title;

            albumCard.appendChild(img);
            albumCard.appendChild(titleDiv);
            grid.appendChild(albumCard);
        });

        // Update page info
        document.getElementById('pageInfo').textContent = `Showing ${albumsData.length} releases`;
    }

    // Show album details in modal
    function showAlbumInfo(album) {
        const modal = document.getElementById('albumModal');
        const details = document.getElementById('albumDetails');

        details.innerHTML = `
            <div class="album-info">
                <h2>${album.title}</h2>
                <p><strong>Release Date:</strong> ${album.releaseDate}</p>
                <p><strong>Type:</strong> ${album.type}</p>
                <p><strong>Description:</strong> ${album.description}</p>
                <h3>Tracklist:</h3>
                <ol class="track-list">
                    ${album.tracks.map(track => `<li>${track}</li>`).join('')}
                </ol>
            </div>
        `;

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // Make showAlbumInfo available globally
    window.showAlbumInfo = showAlbumInfo;

    // Close modal function
    window.closeModal = function() {
        document.getElementById('albumModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('albumModal');
        if (event.target == modal) {
            closeModal();
        }
    });

    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('footer nav ul');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});