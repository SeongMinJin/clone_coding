const images = ["1.jpg", "2.jpg", "3.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.classList.add("background");

bgImage.src = `image/${chosenImage}`;

document.body.appendChild(bgImage);