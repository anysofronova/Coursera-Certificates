// JavaScript and the DOM
// document.getElementById('one').style.color = 'red';
// var ps = document.getElementsByTagName('p');
// console.log(paragraphs);
//  for(var i = 0; i < ps.length; i++){
//      ps[i].style.color = 'red';
//      alert(`showing paragraph ${i}`);
//  }
//  var myClass = document.getElementsByClassName('two');
//  for(var someClass of myClass){
//      someClass.style.color = 'red';
//  }

// var myText = document.querySelectorAll('#one.two');
// console.log(myText);
// for(var i of myText){
//     i.style.color = 'red';  
// }

// var pText = document.querySelectorAll('#special p');
// for(var i of pText){
//     i.style.fontWeight = 'bold';
// };

// document.getElementById('special').innerHTML = '<p> Some text </p>'; //Заменяет то что было


// function twoSum (nums, target) {
//     console.log(nums, nums.lenght);
//     for(var i = 0; i < nums.lenght; i++){
//         console.log(i);
//         for(var j = 0; j < nums.lenght; j++){
//             if(i + j == target){
//                 var mas = [];
//                 mas.push(i);
//                 mas.push(j);
//                 console.log(mas);
//             }
//         }
//     }
// };

// var twoSum = function(nums, target){
//     for(var i = 0; i < nums.length; i++){
//         for(var j = 0; j < nums.length; j++){
//             if(nums[i] + nums[j] == target && i != j){
//                 console.log(nums[i],nums[j]);
//                 var mas = [];
//                 mas.push(i,j);
//                 return(mas);
//             }
//         }
//     }
// }
// console.log(twoSum([3,2,4], 6));

// var blueText = document.querySelectorAll('p');
// for(var i of blueText){
//     i.className = 'blue'; // присваивает класс вместо другого
//     i.setAttribute('id', 'some'); //задает определенный атрибут
// }

// var myTag = document.createElement('p'); //создание элемента
// var myText = document.createTextNode('here is a new paragraph');
// myTag.appendChild(myText);
// var myDiv = document.querySelector('div');
// myDiv.appendChild(myTag);

// var myDiv = document.querySelector('div');
// myDiv.removeChild(myDiv.children[1]); //удаление элемента

// ------------------- Capturing Events with JavaScript -------------------
// var btn = document.querySelector('button');

// btn.onclick = function(){
//     alert('i told you');
// };

// var btn = document.querySelector('button');

// function ouch(){
//     alert('i told you');
// };

// var btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//     alert('i told you');
// });

// var btn = document.querySelector('button');

// btn.addEventListener('click', function(e){
//     e.target.style.backgroundColor = 'red';
//     alert('i told you');
// });

// var btn = document.querySelector('a');

// btn.addEventListener('click', function(e){
//     e.preventDefault(); // останавливает изначально задуманное действие
//     alert('Sorry!');
// });

// var myForm = document.querySelector('form');
// myForm.addEventListener('submit', function(e){
//     e.preventDefault();
//     var formData = document.querySelector('input').value; //забирирает значение из заданного аттрибута
//     alert(formData);
// })

// Mouseover, Mouseover Events: HTML
// var heading = document.querySelector('h1');
// var myDiv = document.querySelector('.mydiv');
// myDiv.addEventListener('mouseover', function(){
//     heading.innerHTML = 'the mouse is over  the box';
// });
// myDiv.addEventListener('mouseout', function(){
//     heading.innerHTML = 'the mouse has left the box';
// });

// heading.addEventListener('mouseover', function(){
//     heading.innerHTML = 'Mouseover, Mouseover Events: HTML';
// });

// Scroll Events: HTML Скроллинг
// var pagetop;
// window.addEventListener('scroll', function(){
//     pagetop = window.pageYOffset;
//     console.log(pagetop);
// })

// Window Resizing Ширина окна
// window.addEventListener('resize', function(){
//     console.log(`width is ${window.innerWidth}`);
//     console.log(`height is ${window.innerHeight}`);
// })

// Key Down Event Нажатие клавиши вниз
// document.addEventListener('keydown', function(e){
//     alert(`A key was pressed`);
// });
// document.addEventListener('keydown', function(e){
//     alert(`The ${e.which} key was pressed`); //выводит номер клавиши нажатой на клавиатуре
// });
// document.addEventListener('keydown', function(e){
//     alert(`The ${e.key} key was pressed`);//выводит букву нажатую на клавиатуре
// });

// --------------- Scope in JavaScript ---------------
// Strategy 1: Never Use Global Scope
//не создаем глобальные переменные чтобы не засорять память
// (function () {
//     var myP = document.querySelectorAll('p');
//     for(var i of myP){
//         i.style.color = 'red';
//     }
// })();

// Strategy 2: "use strict;"
// Strategy 3: const and let
// for(let i = 0; i < 10; i++){
//     console.log(i);
// }
// console.log(i);