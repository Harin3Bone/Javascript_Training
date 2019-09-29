//! Coding Challenge 2
    //? Question : Chad and Mike play basketball different team. In last 3 games.
    //? Chad score 89 , 120 , 103
    //? Mike score 116 , 94 , 123
        //# Condition
            //* 1.Calculate average score each team.
            //* 2.Decide which team win (Highest average score win) and print to console.
            //* 3.Then change the score to test result can have different winner or draw.
                //~ EXTRA CHALLENGE : Flitch also play basketball like before.
                //~ Flitch score 97 , 134 , 105 
                //~ Decide which team (Chad , Mike , Flitch) win.  
                    //-- EXTRA HINT : You need to use && 

//! My Solution
var chadAverage = (89 + 120 + 103) / 3;
var mikeAverage = (116 + 94 + 123) / 3;

    //? Condition 1-2
    //// chadAverage > mikeAverage ? console.log('Chad WIN') : console.log('Mike WIN');

    //? Condition 1-3
    if (chadAverage > mikeAverage) {
        console.log('Chad WIN with score : ' + chadAverage + ' points.');
    } else if (mikeAverage > chadAverage) {
        console.log('Mike WIN with score : ' + mikeAverage + ' points.');
    } else {
        console.log('DRAW');
    }
    console.log('---------------');

//! EXTRA SOLUTION
var flitchAverage = (97 + 134 + 105) / 3;

    if ((chadAverage > mikeAverage) && (chadAverage > flitchAverage)) {
        console.log('Chad WIN with score : ' + chadAverage + ' points.');
    } else if ((mikeAverage > chadAverage) && (mikeAverage > flitchAverage)) {
        console.log('Mike WIN with score : ' + mikeAverage + ' points.');
    } else if ((flitchAverage > mikeAverage) && (flitchAverage > chadAverage)) {
        console.log('Flitch WIN with score : ' + flitchAverage + ' points.');
    } else {
        console.log('DRAW');
    }
