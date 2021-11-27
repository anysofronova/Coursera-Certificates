$('#growbox').click(function(){
    $('#box').animate({width: '710px'})
})

$('#growtext').click(function(){
    $('#box').animate({fontSize: '24px'})
})

$('#movebox').click(function(){
    $('#box').animate({left: '300px'})
})

$('#doall').click(function(){
    $('#box').animate({left: '300px', fontSize: '24px', width: '710px'})
})
