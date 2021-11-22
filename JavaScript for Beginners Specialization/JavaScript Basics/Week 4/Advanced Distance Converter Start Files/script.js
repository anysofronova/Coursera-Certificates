let convertType = 'miles';
const heading = document.querySelector('h1');
const intro = document.querySelector('p');
const answer = document.getElementById('answer');
const form = document.getElementById('convert');

document.addEventListener('keydown', (e) =>{
    if(e.key === 'k' || e.key === 'K'){
        heading.innerHTML = 'Kilometers to Miles Converter';
        intro.innerHTML = 'Type in a number of kilometers and click the button to convert the distance to miles.';
        convertType = 'kilometers';
    } else if(e.key === 'm' || e.key === 'M'){
        heading.innerHTML = 'Miles to Kilometers Converter';
        intro.innerHTML = 'Type in a number of miles and click the button to convert the distance to kilometers.';
        convertType = 'miles';
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const distance = parseFloat(document.getElementById('distance').value);
    if(distance){
        if(convertType === 'miles'){
            const convertation = (distance * 1.609344).toFixed(3);
            answer.innerHTML = `<h2>${distance} miles converts to ${convertation} kilometers.</h2>`;
        }else if(convertType === 'kilometers'){
            const convertation = (distance * 0.621371).toFixed(3);
            answer.innerHTML = `<h2>${distance} kilometers converts to ${convertation} miles.</h2>`;
        }
    }else{
        answer.innerHTML = `Please provide a number!</h2>`;
    }
})