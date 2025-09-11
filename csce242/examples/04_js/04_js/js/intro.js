/*
const sayHello = () => {
    console.log("Hello World");
}

document.getElementById("btn-click-me").onclick = sayHello;
*/

document.getElementById("btn-click-me").onclick = (event) => {
    document.getElementById("p-welcome").innerHTML = "Hello World";
    event.currentTarget.classList.add("clicked"); // item that evokes the action //current target is the button that was clicked
};

document.getElementById("btn-happy").onclick = (event) => {
    const pFeeling = document.getElementbyId("p-feeling");
    pFeeling.innerHTML = "Yay!";
    pFeeling.classList.add("happy");
    pFeeling.classList.remove("sad");
}

document.getElementById("btn-sad").onclick = (event) => {
    const pFeeling = document.getElementbyId("p-feeling");
    pFeeling.innerHTML = "Nay!";
    pFeeling.classList.add("sad");
    pFeeling.classList.remove("happy");
}

document.getElementById("btn-clear").onclick = (event) => {
    const pFeeling = document.getElementbyId("p-feeling");
    pFeeling.innerHTML = "";
    pFeeling.classList.remove("happy");
    pFeeling.classList.remove("sad");
}

/*document.getElementById("btn-clear").onclick = (event) => {
    document.getElementById("p-feeling").innerHTML = "Yay!"
}
*/

