const btn = document.getElementById("drawBtn");
const sky = document.getElementById("sky");
const ground = document.getElementById("ground");


btn.addEventListener("click", () => {
    sky.innerHTML = "";
    ground.innerHTML = "";

    // Draw clouds
    for (let i=0; i < 6; i++){
        const cloud = document.createElement("div");
        cloud.className = "cloud";
        sky.appendChild(cloud);
    }

    // Draw trees
    for (let i=0; i < 6; i++){
        const tree = document.createElement("div");
        tree.className = "tree";
        ground.appendChild(tree);
    }

    // Morning or Night by time
    const hour = new Date().getHours();
    let skyObject;
    if (hour >= 18 || hour < 6) {
        document.body.style.background = "black";
        skyObject = document.createElement("div");
        skyObject.className = "moon";
    } else{
        document.body.style.background = "#add8e6";
        skyObject = document.createElement("div");
        skyObject.className = "sun";
    }
    scene.appendChild(skyObject);
});