var theDiv = document.getElementById("thediv");
var currentClass = "one";

function classRotator()
{
    if( currentClass == "one" )
    {
        setTimeout( function(){ 
            theDiv.className="two"; 
            currentClass = "two"; 
            classRotator(); }, 2000 );
    }else{
        setTimeout( function(){ 
            theDiv.className="one"; 
            currentClass = "one"; 
            classRotator(); }, 2000  );
    }
}

classRotator();