
myDiv = document.querySelector('div');


myDiv.addEventListener('mouseover', function(){
    myDiv.classList.add('big');
});
myDiv.addEventListener('mouseout', function(){
    myDiv.classList.remove('big');
});