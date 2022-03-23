const startgame = document.getElementById('startgame');
const gamecontrol = document.getElementById('gamecontrol');
const game = document.getElementById('game');
const actionArea = document.getElementById('actions');
const score = document.getElementById('score');

let gameData = {
    dice: ['1die.jpg', '2die.jpg', '3die.jpg', 
    '4die.jpg', '5die.jpg', '6die.jpg'],
    players: ['player 1', 'player 2'],
    score: [0, 0],
    roll1: 0,
    roll2: 0,
    rollSum: 0,
    index: 0,
    gameEnd: 29
};

startgame.addEventListener('click', function(){

    gameData.index = Math.round(Math.random());

    gamecontrol.innerHTML = '<h2> The game has started </h2>';
    gamecontrol.innerHTML += '<button id="quit">Do you want to quit</button>';
    document.getElementById('quit').addEventListener('click', function(){
        location.reload();
    });
    setUpTurn();
});

function setUpTurn(){
    game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}`;
    actionArea.innerHTML = '<button id="roll">Roll the dice!</button>';
    document.getElementById('roll').addEventListener('click', function(){
        console.log('hi');
    })
}