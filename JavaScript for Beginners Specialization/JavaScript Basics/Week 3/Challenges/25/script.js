var btn_c = document.querySelectorAll('button')[0];
var btn_d = document.querySelectorAll('button')[1];
var myDiv = document.querySelector('div');
var myP = document.querySelectorAll('p');

btn_c.addEventListener('click', function(){
    var newParagraph = document.createElement('p');
    var newText = document.createTextNode('A new paragraph');
    newParagraph.appendChild(newText);
    myDiv.appendChild(newParagraph);
})
btn_d.addEventListener('click', function(){
    myDiv.removeChild(myDiv.children[myP.length - 1]);
})