// Challenge 1 - JS
// const paragraph = document.getElementById('paragraph');
// paragraph.style.fontSize = '24px';

// Challenge 2 - jQuery
// $('#paragraph').css('font-size', '24px');

// Challenge 3 - JS
// const paragraphs = document.querySelectorAll('#main p');
// for(let i of paragraphs){
//     i.style.fontSize = '24px';
//     i.style.color = 'red';
// }

// Challenge 4 - jQuery
// $('#main p').css('font-size', '24px').css('color', 'red');

// Challenge 5 - JS
// const lastParagraph = document.querySelector('#main p:last-of-type');
// lastParagraph.style.fontSize = '24px';
// lastParagraph.style.color = 'red';

// Challenge 6 - jQuery
// $('#main p:last-of-type').css('font-size', '24px').css('color', 'red');
// OR 
// $('#main p').last().css('font-size', '24px').css('color', 'red');
// OR 
// $('#main p').last().css({'font-size': '24px', 'color': 'red'});

// Challenge 7 - JS
// const evenParagraph = document.querySelectorAll('#main p:nth-child(even)');
// for(let i of evenParagraph){
//     i.style.color = 'red';
// }

// Challenge 8 - jQuery
// $('#main p:nth-child(even)').css('color', 'red');
// OR 
// $('#main p').even().css('color', 'red');

// Challenge 9 - JS
// const paragraph = document.querySelector('#main p:nth-child(6)');
// paragraph.style.color = 'red';

// Challenge 10 - jQuery
// $('#main p:nth-child(6)').css('color', 'red');
// OR 
// $("#main p:contains(Llamas and Chickens!)").css("color", "red");

// Challenge 11 - JS
// const navLinks = document.querySelectorAll("nav ul li a");
// for(let i of navLinks){
//     i.addEventListener('click', () =>{
//         alert('clicked')
//     })
// }

// Challenge 12 - jQuery
// $('nav ul li a').click(function() {alert('clicked')});

// Challenge 13 - JS
// const aLinks = document.querySelectorAll('nav ul li a');
// for(let i = 0; i < aLinks.length; i++){
//     aLinks[i].addEventListener('click', function(){
//         console.log(this.innerHTML);
//     })
// }

// Challenge 14 - jQuery
// $('nav ul li a').click(function(){console.log($(this).html())});

// Challenge 15 - JS
// const aLinks = document.querySelectorAll('nav ul li a');
// for(let i = 0; i < aLinks.length; i++){
//     aLinks[i].addEventListener('click', function(){
//         aLinks[i].style.color = 'red';
//     })
// }

// Challenge 16 - jQuery
// $('nav ul li a').click(function(){$(this).css('color', 'red')});

// Challenge 17 - JS
// const aLinks = document.querySelectorAll('nav ul li a');
// for(let i = 0; i < aLinks.length; i++){
//     let count = -1;
//     aLinks[i].addEventListener('click', function(){
//         if(count == i){
//             document.getElementById('paragraph').innerHTML = 'You clicked ' + this.innerHTML + ' twice'; 
//         }else{
//             count = i;
//         document.getElementById('paragraph').innerHTML = 'You clicked ' + this.innerHTML;
//         }
        
//     })
// }

// Challenge 18 - jQuery
// $('nav ul li a').click(function(){
//     $('#paragraph').html('You clicked ' + $(this).html());
// });

// Challenge 19 - JS
// const aLinks = document.querySelectorAll('nav ul li a');
// const paragraphs = document.querySelectorAll('p');

// for(let i = 0; i < aLinks.length; i++){
//     aLinks[i].addEventListener('click', function(){
//         for(let j of paragraphs){
//             j.style.color = 'black';
//         }
//         paragraphs[i].style.color = 'red';
//     })
// }

// Challenge 20 - jQuery
// $('nav ul li a').click(function(){
//     $('p').css('color', 'black');
//     $(`#para${$(this).attr("id")}`).css('color', 'red');
// });