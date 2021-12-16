const theDiv = document.getElementById("thediv");
const content ="<p>adding another paragraph</p>";

const timer = setInterval( function(){ theDiv.innerHTML += content; }, 1500 );

document.getElementById("stop").addEventListener("click", function(){ clearInterval(timer); });