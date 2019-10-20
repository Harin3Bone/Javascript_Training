//! Loop and Iteration Project
    //? For Loop
        // for (var x = 0; x <= 10; x++) {
        //     console.log(x);
        // }

    var asuka = ['Asuka','Nishimiya',2002,'Female','Single'];

    for (var y = 0; y < asuka.length; y++){
        console.log(asuka[y]);
    }
    console.log('-----------------');

    //? While Loop
    var a = 0;
    while (a < asuka.length){
        console.log(asuka[a]);
        a++;
    }
    console.log('-----------------');

    //? Continue and Break statement
    for (var b = 0; b < asuka.length; b++){
        // if (typeof asuka[b] === 'string') {
        //     continue;
        // }
        if (typeof asuka[b] != 'string') continue;
        console.log(asuka[b]);
    }

    console.log('-----------------');

    for (var c = 0; c < asuka.length; c++){
        // if (typeof asuka[b] === 'string') {
        //     break;
        // }
        if (typeof asuka[c] != 'string') break;
        console.log(asuka[c]);
    }
    console.log('-----------------');

    //? Backward loop
    for (var i = asuka.length - 1; i >= 0; i--){
        console.log(asuka[i]);
    }

//! Description
    //? Topic : For Loop
        //# Syntax = for (default value ; condition ; after finished){
        //#     statement1;
        //#     statement2;
        //# }
            //* Can use with print to ()
                //~ 
                //~ statement in for bracket will do when condition is TRU only.
    //? Topic : While Loop
        //# Syntax = while (condition){
        //#     statement1;
        //#     statement2;
        //# }
    //? Topic : Continue
        //# continue can use with 'if'.
        //# When condition in if is false will break to do statement. and will continue another statement
    //? Topic : Break 
        //# break can use with 'if'.
        //# When condition in if is false will stop to do another statement.
    //? Topic : Backward loop
        //# Backward loop is same like as normal of For loop
                //~ Backward loop is not popular to use. But is better for some specification case.