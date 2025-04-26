// Moving Picture Slider Script

let images = [
    "images/slide1.jpg",
    "images/slide2.jpg",
    "images/slide3.jpg",
    "images/slide4.jpg"
];

let index = 0;

function changeImage() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    document.getElementById("slider").src = images[index];
}

// Change image every 3 seconds
setInterval(changeImage, 3000);
