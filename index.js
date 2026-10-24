const photos = [
  "rasm1.jpg",
  "rasm2.jpg",
  "rasm3.jpg"
];

let index = 0;
const photo = document.getElementById("photo");
const bar = document.getElementById("bar");

function nextPhoto() {
  index = (index + 1) % photos.length;

  photo.style.opacity = 0;

  setTimeout(() => {
    photo.src = photos[index];
    photo.style.opacity = 1;
  }, 400);
}

photo.style.transition = "opacity 0.4s";

setInterval(nextPhoto, 3000);

let progress = 0;

setInterval(() => {
  progress += 100 / 300;
  bar.style.width = progress + "%";

  if (progress >= 100) progress = 0;
}, 10);