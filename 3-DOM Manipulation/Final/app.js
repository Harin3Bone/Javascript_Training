//! IMPROVEMENT JAVASCRIPT
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//! Variable Declaration
var score, activePlayer, current, dice;

//! Initializing
startGame();

//! Create Function
//# Start Game
function startGame() {
    //? Initialize Value
    score = [0, 0];
    current = 0;
    activePlayer = 0;

    //? Set Score
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').innerHTML = '<em>0</em>';
    document.getElementById('current-1').innerHTML = '<em>0</em>';

    //? Set Name
    document.getElementById('name-0').textContent = 'Ayase';
    document.getElementById('name-1').textContent = 'Hayasaka';
    
    //? Set Dice
    document.querySelector('.dice').style.display = 'none';

    //? Set Background
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.add('active');
}

//# Roll Button Function
function btnRoll() {
    //? Random Number & Set Current
    dice = Math.floor((Math.random() * 6) + 1);

    //? Dice Image
    var diceDOM;
    diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //? Rule to Change player
    if (dice !== 1) {
        current += dice;
        document.getElementById('current-' + activePlayer).innerHTML = '<em>' + current + '</em>';
    } else {
        nextPlayer();
    }

}

//# Hold Button Function
function btnHold() {
    //? Set Score
    score[activePlayer] += current;
    document.getElementById('score-' + activePlayer).textContent = score[activePlayer];

    //? Win Condition
    if (score[activePlayer] >= 20) {
        document.getElementById('name-' + activePlayer).textContent = 'WINNER';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

    } else {
        nextPlayer();
    }

}

//# Change Player Feature
function nextPlayer() {
    //? Set Score
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    current = 0;
    document.getElementById('current-0').innerHTML = '<em>0</em>';
    document.getElementById('current-1').innerHTML = '<em>0</em>';

    //? Set Background
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

//! Event
document.querySelector('.btn-roll').addEventListener('click', btnRoll);
document.querySelector('.btn-hold').addEventListener('click', btnHold);
document.querySelector('.btn-new').addEventListener('click', startGame);
