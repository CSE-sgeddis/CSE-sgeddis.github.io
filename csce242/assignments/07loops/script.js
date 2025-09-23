const btn = document.getElementById("drawBtn");
const sky = document.getElementById("sky");
const ground = document.getElementById("ground");


btn.addEventListener("click", () => {
    sky.innerHTML = "";
    ground.innerHTML = "";

    // Draw 6 clouds
    for (let i=0; i < 6; i++){
        const cloud = document.createElement("div");
        cloud.className = "cloud";
        scene.appendChild(cloud);
    }

    // Draw 6 trees
    for (let i=0; i < 6; i++){
        const tree = document.createElement("div");
        tree.className = "tree";
        scene.appendChild(tree);
    }

    // Morning or Night by time
    const hour = new Date().getHours();
    let skyObject;
    if (hour >= 18 || hour < 6) {
        document.body.style.background = "black";
        skyObject = document.createElement("div");
        skyObject.className = "moon";
    } else{
        document.body.style.background = "skyblue";
        skyObject = document.createElement("div");
        skyObject.className = "sun";
    }
    scene.appendChild(skyObject);
});