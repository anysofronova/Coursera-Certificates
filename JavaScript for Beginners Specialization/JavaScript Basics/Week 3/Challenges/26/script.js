var btn_c = document.querySelectorAll('button')[0];
var btn_d = document.querySelectorAll('button')[1];
var myDiv = document.querySelector('div');
var myP = document.querySelectorAll('p');
var count = 1;

btn_c.addEventListener('click', function(){
    count++;
    var newParagraph = document.createElement('p');
    var newText = document.createTextNode(`This is paragraph number ${count}`);
    newParagraph.appendChild(newText);
    myDiv.appendChild(newParagraph);
})
btn_d.addEventListener('click', function(){
    if(count > 1){
        myDiv.removeChild(myDiv.children[count - 1]);
        count--;
    }else{
        alert("don't delete the last paragraph!")
    }
})