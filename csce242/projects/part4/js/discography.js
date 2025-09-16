const albumData{
    'I Am NOT': {
        title:['I Am NOT'],
        releaseDate: ['March 16, 2018']
        description: ['The debut mini album that introduced Stray Kids to the world with their powerful message of self-identity.'],
        tracks: ['District 9', 'Mirror', 'Awaken', 'Rock', 'Grow Up', 'Mixtape#1', 'Mixtape#2', 'Mixtape#3']
    }
    'I Am WHO': {
        title:'I Am WHO',
        releaseDate: 'August 06, 2018';
        description: 'Second mini album exploring themes of finding oneself and overcoming obstacles.',
        tracks: ['Voices', 'My Pace', 'Insomnia', 'Hero\'s Soup', 'Question', 'Mixtape#4', 'Mixtape#5']
    'I Am YOU': {
        title:'I Am YOU',
        releaseDate: 'October 22, 2018';
        description: 'Third installment of the I Am series, focusing on relationships and connections.'
        tracks: ['I Am YOU', 'My Universe', 'Heroic Soup', 'Get Cool', 'Mixtape: On Track']
    }
    'Cle 1 MIROH': {
        title:'Cle 1 : Miroh',
        releaseDate: 'March 25, 2019';
        description: 'Beginning of the Clé series with the powerful title track MIROH.'
        tracks: ['MIROH', 'Victory Song', 'Maze of Memories', 'MIROH (Extended Ver.)', 'Entrance', 'Chronosaurus']
    }
    'Go LIVE': {
        title:'Go LIVE',
        releaseDate: 'June 17, 2020';
        description: 'First full-length album featuring the hit title track "God\'s Menu".'
        tracks: ['God\'s Menu', 'Easy', 'Pacemaker', 'Another Day', 'Phobia', 'Blueprint', 'TA', 'Haven']
    }
    'NOEASY'; {
        title:'NOEASY',
        releaseDate; 'August 23, 2021'
        description: 'Second studio album with the explosive title track "Thunderous".'
        tracks: ['Cheese', 'Thunderous', 'Domino', 'SSICK', 'The View', 'Sorry, I Love You', 'Silent Cry', 'Secret Secret']
    }
}

function showAlbumInfo(albumName){
    const album = albumData[albumName];
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
}

function closeModal(){
    document.getElementById('albumModal').style.display = 'none';
}

window.onclick = function(event){
    const modal = this.document.getElementById('albumModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
