class Painting{
    constructor(name, artist, image, isFramed){
        this.name = name;
        this.artist = artist;
        this.image = image;
        this.isFramed = isFramed;
    }

    getSection(){
        return ` 
            <return class="painting-section" onclick="showModal"(${paintings.indexOf(this)})">
                <img src="${this.image}" alt="${this.name}">
                <h3>${this.name}</h3>
            </section>
        `;
    }

    getModalContent(){
        const frameClass = this.isFramed ? 'framed' : '';
        return `
            <div class="modal-info">
                <h2>${this.name}</h2>
                <img src="${this.image}" alt="${this.name}" class="modal-image ${frameClass}">
                <p><strong>Artist:</strong> ${this.artist}</p>
                <p><strong>Framed:</strong> ${this.isFramed ? 'Yes' : 'No'}</p>
            </div>
        `;
    }
}

const paintings = [
    new Painting(
        "Untitled", "Tanaka Atsuko", "https://www.artic.edu/iiif/2/e9611bae-b59f-02ce-276f-79fadca24b19/full/843,/0/default.jpg", "false"
    ),
    new Painting(
        "Blue and Green Music", "Georgia O'Keeffe", "https://www.artic.edu/iiif/2/3ee54063-9d78-ee86-0103-b477d988a93f/full/843,/0/default.jpg", "true"
    ),
    new Painting(
        "Under the Wave off Kanagawa", "Katsushika Hokusai", "https://www.artic.edu/iiif/2/2fa24f36-cc26-41b6-4b49-12bba2a6c1c8/full/843,/0/default.jpg", "true"
    ),
    new Painting(
        "Water Lilies", "Claude Monet", "https://www.artic.edu/iiif/2/3c27b499-af56-f0d5-93b5-a7f2f1ad5813/full/843,/0/default.jpg", "false"
    )
];

function displayPaintings(){
    const gallery = document.getElementById('gallery');
    paintings.forEach(painting => {
        gallery.innerHTML += painting.getSection();
    });
}

function showModal(index){
    const modal = document.getElementById('paintingModal');
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = paintings[index].getModalContent();
    modal.style.display = 'block';
}

function closeModal(){
    document.getElementById('paintingModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('paintingModal');
    if (event.target == modal){
        modal.style.display = 'none';
    }
}

displayPaintings();