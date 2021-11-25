$('ul li ul').hide();

// $('.menulink').click(function(){
//     let thisMenu = $(this).next('ul');
//     if(thisMenu.is(':visible')){
//         thisMenu.hide();
//     }else{
//         thisMenu.show();
//     }
// });

// OR 

$('.menulink').click(function(){
    let thisMenu = $(this).next('ul');
    $('ul li ul').not(thisMenu).hide();
    thisMenu.toggle();
    }
);