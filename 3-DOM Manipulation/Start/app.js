/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer;
// var dice,dice1

scores = [0, 0];
roundScore = 0;
activePlayer = 1;

//! Random Number Method
//# 1.Math.random()             -> random number 0 to 1 (with decimal number)
//* Math.random() * 6 -> random number 0 to 5
//# 2.Math.floor(Math.random()) -> random number 0 to 1 (with integer number)
//* if we get 0 + 1 -> 1 actually get 5 then will be 6 (it will not fetch 0 but it can get as well)

// dice = Math.floor(Math.random() * 6) + 1;
// dice1 = Math.floor(Math.random() * 6) + 1;

//! Query Selector Keyword
//? Use id in html component to put data from Js to HTML
// document.querySelector('#score-0').textContent = dice0;
// document.querySelector('#score-1').textContent = dice1;

//! Current Score
//# <em></em> use for make font italic
//~ If use textContent you can't use <tag> in value
//~ If use innerHTML you can use <tag> in value

// document.querySelector('#current-' + activePlayer).textContent = '<em>' + dice + '</em>';
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//! Dice Image
//? . use for in HTML 'Class'
//? # use for in HTML 'Id'
document.querySelector('.dice').style.display = 'none';

//! getElementById // getElementByName // getElementByClassName
//? getElement -> Use for get something from HTML and then you can do what you want
//* If use method like these -> No Need to use # , . -> Just put name
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//! Function Declaration
// function rollBtn(){
//     //* Do something here
// }

//! EVENT Manipulation
//? Events : Notification that are sent to notify the code that something happened on the webpage
//? Event listener : A function that performs an action based on a certain event. It waits for a specific event to happen
//# In EventListener() can find at https://developer.mozilla.org/en-US/docs/Web/Events
//* You can use function in event like this or 
// document.querySelector('.btn-roll').addEventListener('click', rollBtn);
//* Create function in event
//~ Roll Button onClick Listener
document.querySelector('.btn-roll').addEventListener('click', function () {
    //* Do something here

    //? Random Number
    var rollDice = Math.floor(Math.random() * 6) + 1;
    // console.log(rollDice)

    //? Display Result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + rollDice + '.png';

    //? Update Dice Display
    document.getElementById('score-' + activePlayer).textContent = rollDice;

    //? Condition
    //~ If you roll dice get 2 3 4 5 6 it will continue
    if (rollDice !== 1) {
        //# Add Score
        roundScore += rollDice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    //~ If you roll dice get 1 then change player
    else {
        //# Next Player 
        console.log(rollDice)

        //* If-Else
        // if (activePlayer === 0){
        //     activePlayer = 1;        
        // }
        // else {
        //     activePlayer = 0;
        // }

        //* Ternary
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        //~ Toggle 
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        //~ Add & Remove
        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active');

    }
});

//~ New Game Button onClick Listener
document.querySelector('.btn-new').addEventListener('click', function () {
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
})