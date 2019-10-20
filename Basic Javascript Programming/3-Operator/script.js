//! Operator Part 1 Project
var string1, string2, string3;
string1 = 'A';
string2 = 'B';
string3 = string1 + string2;

var number1, number2, number3;
number1 = 9;
number2 = 9.99;
number3 = number1 - 6;

var bool1, bool2, bool3;
bool1 = true;
bool2 = 1 > 3;
bool3 = bool2 || bool1;

    //? Math Operator
    console.log(string1);
    console.log(string1 + string2);
    console.log(string3 * 3);
    console.log('---------------');
    console.log(number1);
    console.log(number2);
    console.log(number3);
    console.log(number3 + 4);

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
    console.log(number1 == number1);
    console.log(number1 == number2);
    console.log(number3 === number3);
    console.log(number3 === number1);
    console.log(bool2 === number3);
    console.log('---------------');

//! Operator Part 2 Project
    //? Precedence Operator 
    var precedenceNumber = 1;
    var precedenceString = 'Precedence';

    //? Multiple Operator
    var multipleNumber = 1 + 2 + 3 + 4;
    var multipleVariableNumber = number1 + number1 - number3;
    var multipleVariableString = string1 + string3;
    var multipleVariableType = number1 + string3;
    var multipleBoolean = 5 + 5 >= 10;
    console.log(multipleNumber);
    console.log(multipleVariableNumber);
    console.log(multipleVariableString);
    console.log(multipleVariableType);
    console.log(multipleBoolean);
    console.log('---------------');

    //? Grouping
    var groupNumber1 = 10 - (5 * 2);
    var groupNumber2 = (10 - 5) * 2;
    var groupBool1 = 10 + 5 >= 4 && 3 - 3 * 2 > 9;
    var groupBool2 = ((10 + 5) >= 4) && (((3 - 3) * 2) > 9);
    console.log('G1 :', groupNumber1, '\nG2 :', groupNumber2);
    console.log('B1 : ', groupBool1, '\nB2 : ', groupBool2);
    console.log('---------------');

    //? Multiple Assignment
    var assignA, assignB;
    assignA = assignB = (3 * 3) + 3 - 3;
    console.log(assignA, assignB);
    console.log(assignA === assignB);
    console.log('---------------');

    //? More Operator
    var more1 = 1;
    console.log('First Value :', more1);
    more1++;
    console.log('Second Value : ', more1)
    more1 += 1;
    console.log('Third Value : ', more1);
    console.log('---------------');

//! Puzzle 
    console.log(10 + 10 + 'Hello');
    //# Result = 20Hello -> Javascript detect Number then calculate get 20, After that Number + String fetch 20Hello.
    console.log('Hello' + 10 + 10);
    //# Result = Hello1010 -> Javascript detect String then after that String + Number fetch Hello1010.
    //// console.log(10+10+'Hello'+10);

//! Description
    //? Topic : Mathematic operator
        //# Example : + , - , * , / , %
            //* +       : When use with String -> A+B = AB (Give a combine String)
            //* +       : When use with Number -> 1+2 = 3 (Give a result)
            //* -,*,/,% : Can use with Number only 
    //? Topic : Logical operator
        //# Example : > , >= , < , <= , && , || , == , === 
            //* ==      : Use to compare value is equal or not.
            //* ===     : Use to compare value and data type is same or not.
    //? Topic : typeof operator
        //# typeof it use for check what data type of variable 
    //? Topic : Special operator
        //# Example : ++ , -- , += , -= , *= , /= , %=