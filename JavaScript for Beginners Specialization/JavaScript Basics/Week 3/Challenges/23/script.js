var btn = document.querySelector('button');
var p = document.querySelectorAll('p');

btn.addEventListener('click', function(){
    for(var i of p){
        i.style.color = 'green';
    }
})