// Beatles lyrics
const lyrics = `Here comes the sun, doo-doo-doo-doo... Here comes the sun, and I say, it's all right.`;

//Handle Sunny Times click
const sunnyColumn = document.getElementById("sunnyColumn");
const lyricsPara = document.getElementById("lyrics");

sunnyColumn.addEventListener("click", () =>{
    lyricsPara.textContent = lyrics;
});

// Color picker
const colorPicker = document.getElementById("colorPicker");
const colorText = document.getElementById("colorText");
const colorCode = document.getElementById("colorCode");

colorPicker.addEventListener("input", () => {
    const selectedColor = colorPicker.value;
    colorText.style.color = selectedColor;
    colorCode.textContent = `Color code: ${selectedColor}`;
});

// Image change
const weatherImage = document.getElementById("weatherImage");
const sunnyImage = "images/sunny.jpg";
const cloudyImage = "images/cloudy.jpg";

weatherImage.addEventListener("click", () => {
    weatherImage.src = sunnyImage;
});