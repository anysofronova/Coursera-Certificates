const images = ['./slides/image1.jpg', './slides//image2.jpg', './slides//image3.jpg', './slides//image4.jpg', './slides//image5.jpg'];
let img = document.getElementById('myimage');
let next = document.getElementById('next');
let prev = document.getElementById('previous')
let counter = 0;

next.addEventListener('click', () =>{
    counter--;
    if(counter < 0){ counter = images.length - 1; }
    img.classList.add('fadeinimg');
    img.src = images[counter];
    setTimeout(() => { removeClass(); }, 500);
});

prev.addEventListener('click', () =>{
    counter++;
    if(counter >= images.length){ counter = 0; }
    img.classList.add('fadeinimg');
    img.src = images[counter];
    setTimeout(() => { removeClass(); }, 500);
});

function removeClass(){
    if(img.classList.contains('fadeinimg')){
        img.classList.remove('fadeinimg');
    }
}


