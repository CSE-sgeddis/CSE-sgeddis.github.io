class Dog{
    constructor(title, breed, color, age, size, pic) {
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("dog");

        //header
        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);

        //column container
        const columnContainer = document.createElement("div");
        columnContainer.classList.add("columns");
        section.append(columnContainer);

        //first column
        const divCol1 = document.createElement("div");
        columnContainer.append(divCol1);
        divCol1.append(this.picture(this.pic));

        //second column
        const divCol2 = document.createElement("div");
        columnContainer.append(divCol2);
        divCol2.append(this.picture(this.pic));


        // divs 


        return section;
    }

    picture(filename) {
        const img = document.createElement("img");
        img.src = `images/classes/${filename}`;
        return img;
    }

    paragraph(key, value) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${key}:</strong> ${value}`;
    }

}

const dogs = [];
dogs.push(new Dog("Coco", "Yorkie", "Black", 6, "small", "yorkie.png"));
dogs.push(new Dog("Sam", "Golden Retriever", "Yellow", 1, "med", "golden-retriever.png"));
dogs.push(new Dog("Madi", "American Bully", "Gray", 3, "large", "american-bully.png"));

//on page load
const dogListDiv = document.getElementById("dog-list");

dogs.forEach((dog)=>{
    dogListDiv.append(dog.item);
});

