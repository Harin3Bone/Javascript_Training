/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, dice;
// var dice1

scores = [0, 0];
roundScore = 0;
activePlayer = 1;

//! Random Number Method
//# 1.Math.random()             -> random number 0 to 1 (with decimal number)
//* Math.random() * 6 -> random number 0 to 5
//# 2.Math.floor(Math.random()) -> random number 0 to 1 (with integer number)
//* if we get 0 + 1 -> 1 actually get 5 then will be 6 (it will not fetch 0 but it can get as well)

dice = Math.floor(Math.random() * 6) + 1;
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
document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//! Dice Image
//? . use for in HTML 'Class'
//? # use for in HTML 'Id'
document.querySelector('.dice').style.display = 'none';

//! EVENT Manipulation
//? Events : Notification that are sent to notify the code that something happened on the webpage
//? Event listener : A function that performs an action based on a certain event. It waits for a specific event to happen
 