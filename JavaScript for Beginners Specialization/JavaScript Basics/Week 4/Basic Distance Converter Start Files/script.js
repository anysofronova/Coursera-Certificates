
document.getElementById('convert').addEventListener('submit', (e) =>{
    e.preventDefault();
    let distance = parseFloat(document.getElementById('distance').value);
    let answer = document.getElementById('answer');
    if(distance){
        let convertation = (distance * 1.609344).toFixed(3);
        answer.innerHTML = `<h2>${distance} miles converts to ${convertation} kilometers.</h2>`;
    }else{
        answer.innerHTML = `Please provide a number!</h2>`;
    }
    
})