document.addEventListener('DOMContentLoaded', function(){
//Album data
    const albumData = {
        'I Am NOT': {
            title:['I Am NOT'],
            releaseDate: ['March 16, 2018'],
            description: ['The debut mini album that introduced Stray Kids to the world with their powerful message of self-identity.'],
            tracks: ['District 9', 'Mirror', 'Awaken', 'Rock', 'Grow Up', 'Mixtape#1', 'Mixtape#2', 'Mixtape#3']
        },
        'I Am WHO': {
            title:'I Am WHO',
            releaseDate: 'August 06, 2018',
            description: 'Second mini album exploring themes of finding oneself and overcoming obstacles.',
            tracks: ['Voices', 'My Pace', 'Insomnia', 'Hero\'s Soup', 'Question', 'Mixtape#4', 'Mixtape#5']
        },
        'I Am YOU': {
            title:'I Am YOU',
            releaseDate: 'October 22, 2018',
            description: 'Third installment of the I Am series, focusing on relationships and connections.',
            tracks: ['I Am YOU', 'My Universe', 'Heroic Soup', 'Get Cool', 'Mixtape: On Track']
        },
        'Cle 1 MIROH': {
            title:'Cle 1 : Miroh',
            releaseDate: 'March 25, 2019',
            description: 'Beginning of the Clé series with the powerful title track MIROH.',
            tracks: ['MIROH', 'Victory Song', 'Maze of Memories', 'MIROH (Extended Ver.)', 'Entrance', 'Chronosaurus']
        },
        'Go LIVE': {
            title:'Go LIVE',
            releaseDate: 'June 17, 2020',
            description: 'First full-length album featuring the hit title track "God\'s Menu".',
            tracks: ['God\'s Menu', 'Easy', 'Pacemaker', 'Another Day', 'Phobia', 'Blueprint', 'TA', 'Haven']
        },
        'NOEASY': {
            title:'NOEASY',
            releaseDate: 'August 23, 2021',
            description: 'Second studio album with the explosive title track "Thunderous".',
            tracks: ['Cheese', 'Thunderous', 'Domino', 'SSICK', 'The View', 'Sorry, I Love You', 'Silent Cry', 'Secret Secret']
        },

        'ODDINARY': {
            title: 'ODDINARY',
            releaseDate: 'March 18, 2022',
            description: 'Embracing being odd and ordinary simultaneously. Features the intense title track "MANIAC".',
            tracks: ['VENOM', 'MANIAC', 'Charmer', 'FREEZE', 'LOL', 'Muddy Water', 'Lonely St.', 'Waiting For Us'],
        },
        '5-STAR': {
            title: '★★★★★ (5-STAR)',
            releaseDate: 'June 2, 2023',
            description: 'Third studio album showcasing peak artistic achievement with "S-Class" leading the charge.',
            tracks: ['Hall of Fame', 'S-Class', 'ITEM', 'Super Bowl', 'TOPLINE (Feat. Tiger JK)', 'DLC', 'GET LIT', 'Collision', 'FNF', 'Youtiful', 'THE SOUND', 'Time Out'],
        },
        'ROCK-STAR': {
            title: '락 (ROCK-STAR)',
            releaseDate: 'November 10, 2023',
            description: 'Latest album proving their rock-solid status in the industry with "LALALALA" as the energetic title track.',
            tracks: ['LALALALA', 'MEGAVERSE', 'COMFLEX', 'COVER ME', 'Leave', 'SOCIAL PATH (Feat. LiSA)', 'Blind Spot', 'ROCK (락)'],
        }
    };

    //Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const albumCards = document.querySelectorAll('.album-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function(){
            //update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filter = this.dataset.filter;

            // Filter albums
            albumCards.forEach(card => {
                if (filter == 'all') {
                    card.style.display = 'block';
                } else {
                    const cardType = card.dataset.type;
                    card.style.display = cardType == filter ? 'block' : 'none';
                }
            });
        });
    });

    //Modal functionality
    window.showAlbumInfo = function(albumName){
        const album = albumData[albumName];
        if (!album) return;

        const modal = document.getElementById('albumModal');
        const details = document.getElementById('albumDetails');

        details.innerHTML =
            <div class="album-info">
                <h2>${album.title}</h2>
                <p><strong>Release Date:</strong> ${album.releaseDate}</p>
                <p><strong>Description:</strong> ${album.description}</p>
                <h3>Tracklist:</h3>
                <ol class="track-list">
                    ${album.tracks.map(track => `<li>${track}</li>`).join('')}
                </ol>
            </div>
        ;

        modal.style.display = 'block';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        modal.style.zIndex = '2000';

        document.body.style.overflow = 'hidden';
    };

    window.closeModal = function(){
        document.getElementById('albumModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // close Modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('albumModal');
        if (event.target == modal) {
            closeModal();
        }
    });

    //Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('footer nav ul');

    if (hamburger && navMenu){
        hamburger.addEventListener('click', function(){
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.addEventListener('click', function(e){
            if(!hamburger.contains(e.target) && !navMenu.contains(e.target)){
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
