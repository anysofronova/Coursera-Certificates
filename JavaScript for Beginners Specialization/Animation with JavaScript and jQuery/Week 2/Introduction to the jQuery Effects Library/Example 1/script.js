$('#hidebox').click(function(){
    $('#box').hide(500)
})

$('#showbox').click(function(){
    $('#box').show(500)
})

$('#togglebox').click(function(){
    $('#box').toggle(500, function(){
        alert('done');
    })
})