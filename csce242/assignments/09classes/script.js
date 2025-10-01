class Painting{
    constructor(name, artist, image, isFramed){
        this.name = name;
        this.artist = artist;
        this.image = image;
        this.isFramed = isFramed;
    }

    getSection(index){
        return ` 
            <section class="painting-section" onclick="showModal(${index})">
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
            </div>
        `;
    }
}

const paintings = [
    new Painting(
        "Untitled", "Tanaka Atsuko", "images/Untitled.jpg", false
    ),
    new Painting(
        "Blue and Green Music", "Georgia O'Keeffe", "images/BlueandGreenMusic.jpg", true
    ),
    new Painting(
        "Under the Wave off Kanagawa", "Katsushika Hokusai", "images/UndertheWave.jpg", true
    ),
    new Painting(
        "Water Lilies", "Claude Monet", "images/WaterLillies.jpg", false
    ),
    new Painting(
        "Love of Winter", "George Wesley Bellows", "images/LoveofWinter.jpg", true
    )
];

function displayPaintings(){
    const gallery = document.getElementById('gallery');
    paintings.forEach((painting, index) => {
        gallery.innerHTML += painting.getSection(index);
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