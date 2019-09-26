//! Operator Part 1 Project
var string1 , string2, string3;
string1 = 'A';
string2 = 'B';
string3 = string1+string2;

var number1 , number2 , number3;
number1 = 9;
number2 = 9.99;
number3 = number1 - 6;

var bool1, bool2 , bool3;
bool1 = true;
bool2 = 1>3;
bool3 = bool2||bool1;

    //? Math Operator
    console.log(string1);
    console.log(string1+string2);
    console.log(string3*3);
    console.log('---------------');
    console.log(number1);
    console.log(number2);
    console.log(number3);
    console.log(number3+4);

    //? Logical Operator
    console.log(bool1);
    console.log(bool2);
    console.log(bool3);
    console.log('---------------');

    //? typeof Operator
    console.log(typeof number1);
    console.log(typeof bool2);
    console.log(typeof 'Please tell me what is my Data Type');
    var dataType;
    console.log(typeof dataType);
    console.log('---------------');

    //? Equal Operator
    console.log(number1==number1);
    console.log(number1==number2);
    console.log(number3===number3);
    console.log(number3===number1);
    console.log(bool2===number3);

//! Operator Part 2 Project


//! Description
    //? Topic : Mathematic operator
        //# Example : + , - , * , / , % , ++ , -- 
            //* +       : When use with String -> A+B = AB (Give a combine String)
            //* +       : When use with Number -> 1+2 = 3 (Give a result)
            //* -,*,/,% : Can use with Number only 
    //? Topic : Logical operator
        //# Example : > , >= , < , <= , && , || , == , === 
            //* ==      : Use to compare value is equal or not.
            //* ===     : Use to compare value and data type is same or not.
    //? Topic : typeof operator
        //# typeof it use for check what data type of variable 