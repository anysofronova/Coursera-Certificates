$('#slideupbox').click(function(){
    $('#box').slideUp('slow');
})

$('#slidedownbox').click(function(){
    $('#box').slideDown(2000);
})

$('#slidetogglebox').click(function(){
    $('#box').slideToggle('2000', 'swing');
})