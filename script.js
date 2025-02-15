const text = ["Full-Stack Developer", "AI Engineer", "Java & Python Expert"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
    if (count === text.length) {
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);
    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1500);
    } else {
        setTimeout(type, 100);
    }
}

document.addEventListener("DOMContentLoaded", type);

/* Play Sound Effect on Click */
document.addEventListener("click", function() {
    let audio = new Audio("click.mp3");
    audio.play();
});

/* Initialize Google Map */
function initMap() {
    let location = { lat: 12.9716, lng: 77.5946 };  // Update with your location
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location
    });
}
