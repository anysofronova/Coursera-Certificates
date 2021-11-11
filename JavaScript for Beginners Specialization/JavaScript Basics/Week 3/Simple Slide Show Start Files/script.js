const images = ['./image1.jpg', './image2.jpg', './image3.jpg', './image4.jpg', './image5.jpg'];
let img = document.getElementById('myimage');
let counter = 0;

document.getElementById('previous').onclick = prevPhoto;
document.getElementById('next').onclick = nextPhoto;

function prevPhoto(){
    counter--;
    if(counter < 0){ counter = images.length - 1; }
    img.src = images[counter];
};

function nextPhoto(){
    counter++;
    if(counter >= images.length){ counter = 0; }
    img.src = images[counter];
};
