var btn = document.querySelector('button');

btn.addEventListener('click', function(){
    var newParagraph = document.createElement('p');
    var newText = document.createTextNode('A new paragraph');
    newParagraph.appendChild(newText);
    var myDiv = document.querySelector('div');
    myDiv.appendChild(newParagraph);
})
