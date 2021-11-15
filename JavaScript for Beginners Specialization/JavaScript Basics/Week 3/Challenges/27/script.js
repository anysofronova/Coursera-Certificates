var myForm = document.querySelector('form');
var h1Tag = document.querySelector('h1');

myForm.addEventListener('submit', function(e){
    e.preventDefault();
    var myNum = parseInt(document.querySelector('input').value); //забирирает значение из заданного аттрибута
    if(myNum){
        h1Tag.style.fontSize = myNum + 'px';
    }else{
        alert('please enter a number');
    }
});