//! If-Else Project
var maleName = 'Hiroto';
var femaleName = 'Hinata';
var mockValue = 0;

    //? If statement (==)
    if (maleName == 'Hiroto') {
        console.log('Value same');
    }

    //? If statement (===)
    if (maleName === 'Hiroto') {
        console.log('Value and DataType same\n');
    }

    //? If-Else statement
    if (femaleName === 'Hikari') {
        console.log('Her name is HIKARI\n');
    } else {
        console.log('Her name is HINATA\n');
    }

    //? If-Else If statement
    if (maleName == 'HIKARU') {
        console.log('His name is HIKARU\n');
    } else if (maleName == 'Hiroto') {
        console.log('His name is HIROTO\n');
    }

//! Boolean Condition
    //? Advance of If statement
    if (mockValue >= 0) {
        if (mockValue > 0 && mockValue < 0) {
            console.log('Mock Value != 0');
        } else if (mockValue == 0){
            console.log('Mock Value = 0');
        }
    } else {
        if (mockValue < 0) {
            console.log('Mock Value < 0');
        } else if (mockValue != 0 && mockValue > 0) {
            console.log('Mock Value > 0');
        } else {
            if(mockValue == 0){
                console.log('Mock Value = 0');    
            }
        }
    }
    console.log('---------------------');


//! Description 
    //? Topic : If statement
        //# Command syntax : if (condition) {
                        //#     statement1;
                        //#     statement2;
                        //#     statement3;
                        //#  }
        //# statement in bracket will do when condition in if bracket is "true".
    //? Topic : If-Else statement
        //# Command syntax : if (condition) {
                        //#     statement1;
                        //#     statement2;
                        //#     statement3;
                        //#  }
                        //#  else {
                        //#     statement4;
                        //#  }
        //# Just like If statement and when condition in if bracket is "false" it will do else.
            //* You can do if-else if. Example
                        //* If (condition1){
                        //*     statement1;
                        //* }
                        //* else if (condition2){
                        //*     statement2;
                        //* }
                //~ Operator in condition MUST be "logical operator" ONLY.
    //? Topic : Truth Table
        //# AND (&&) : true AND true -> true 
                //~ Another -> false
        //# OR (||) : false OR false -> false 
                //~ Another -> true
        //# NOT (!) : Opposite 
            //* Example : !true = false , !false = true 