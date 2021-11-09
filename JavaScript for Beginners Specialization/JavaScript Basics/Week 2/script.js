
// --------------- Operators, Booleans, and Selection Statements in JavaScript ---------------
// var red = true;
// var blue = false;

// if(red){
//     console.log('true')
// }else{
//     console.log('false')
// }; //true

// if(blue){
//     console.log('true')
// }else{
//     console.log('false')
// }; //false

// var green;
// if(green){
//     console.log('true')
// }else{
//     console.log('false')
// }; //false

// green = 0;
// if(green){
//     console.log('true')
// }else{
//     console.log('false')
// }; //false

// var myNum = 5;
// var otherNum = '5';
// if(myNum == otherNum){
//     console.log('true')
// }else{
//     console.log('false')
// } // true

// var colors = ['red', 'green', 'blue', 'yellow'];
// var selectedColor = colors[3];
// if (selectedColor == 'red'){
//     console.log('red');
// }else if(selectedColor == 'blue'){
//     console.log('blue');
// }else if(selectedColor == 'green'){
//     console.log('green');
// }else{
//     console.log('yellow');
// }

// switch(selectedColor){
//     case 'red': console.log('red'); break;
//     case 'blue': console.log('blue'); break;
//     case 'green': console.log('green'); break;
//     case 'yellow': console.log('yellow'); break;
//     default: console.log('error'); break;
// }

// var first = true;
// var second = true;
// if(first && second){
//     console.log('true');
// }else{
//     console.log('false');
// } // true

// if(first || second){
//     console.log('true');
// }else{
//     console.log('false');
// } // true

// second = false;
// if(first && second){
//     console.log('true');
// }else{
//     console.log('false');
// } // false

// if(first || second){
//     console.log('true');
// }else{
//     console.log('false');
// } // true

// --------------- Loops in JavaScript ---------------

// for(var i = 0; i < 10; i++){
//     console.log(i)
// }

// var colors = ['red', 'blue', 'yellow', 'green'];

// for(var i = 0; i < colors.length; i++){
//     console.log(colors[i]);
// }
// for(var eachItem of colors){
//     console.log(eachItem);
// }

// var joke = 'Anna is a programmer';
// for(var i = 0; i < joke.length; i++){
//     console.log(joke[i] + '\n')
// }

// for(var eachItem of joke){
//     console.log(eachItem);
// }

// var somePoint = 0;
// var someText = '';
// while(somePoint < 10){
//     someText += `Op ${somePoint} \n`;
//     somePoint++;
// }
// console.log(someText);

// --------------- Sequence, Selection, and Loop ---------------

// var myString = 'I am really hungry for some';
// console.log(myString);
// var myUpperString = myString.toUpperCase();
// console.log(myUpperString); // I AM REALLY HUNGRY FOR SOME
// var reallyLocation = myString.search('really');
// console.log(reallyLocation); // 5
// var specialWord = myString.substr(reallyLocation, 6);
// console.log(specialWord); // really
// var newString = myString.replace(specialWord, 'so');
// console.log(newString);

// var food = ['cheese', 'pie', 'lunch', 'breakfast'];
// for(var someFood of food){
//     console.log(`${myString} ${someFood}`);
// }

// for(var i = 0; i < food.length; i++){
//     if(i % 2 === 0){
//         console.log(`${myString} ${food[i].toUpperCase()}`);
//     }else{
//         console.log(`${myString} ${food[i]}`);
//     } 
// }

// var firstName = 'Anna';
// var lastName = 'Sofronova';
// console.log(firstName);
// console.log(lastName);
// console.log(firstName + ' ' + lastName);
// var adjective = 'is a bad programmer';
// console.log(`${firstName} ${lastName} ${adjective}`);

// var someName = prompt("What's your name?", "");
// console.log(`Hi ${someName}, and welcome!`)

// var someNumber = prompt('Enter a whole number', '');
// if(someNumber < 10){
//     console.log('You entered a number smaller than 10');
//     for(var i = 0; i < 10; i++){
//         if(i == someNumber){
//             console.log(`Here is a ${i} <-- this is your number!`);
//         }else{
//             console.log(`Here is a ${i}`);
//         }
//     }
// }else if(someNumber >= 10){
//     console.log('You entered a big number');
// }else{
//     console.log("ERROR: you didn't enter a number!")
// }

// var someColor = prompt('Enter your color', '');
// if( someColor === 'red' || someColor === 'blue' || someColor === 'yellow'){
//     console.log(`You picked a primary color: ${someColor}`);
// } else if(someColor === 'orange' || someColor === 'green' || someColor === 'purple'){
//     console.log(`You picked a secondary color: ${someColor}`);
// }

// --------------- Functions in JavaScript ---------------

// function doStuff(){
//     var myString = 'here is a message';
//     var myUpperString = myString.toUpperCase();
//     console.log(myString);
//     console.log(myUpperString);
// }
// doStuff();

// function upperMessage(message){
//     console.log(message.toUpperCase());
// }
// upperMessage('some test');

// function addNumbers(num1, num2){
//     return(num1+num2);
// }
// console.log(addNumbers(2,3))

// console.log(Math.random())

// function randomInt(min, max){
//     return Math.floor((max - min + 1) * Math.random()) + min;
// }
// var food = ['cheese', 'pie', 'lunch', 'breakfast'];
// console.log(food[randomInt(0, food.length - 1)]);

// var joke = 'Anna is a programmer';
