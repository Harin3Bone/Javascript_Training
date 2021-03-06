//! Variable Project
var string = 'StringTest'
var number = 3
var numberV2 = 1+2
var flt = 3.12345
var bool = true
var undefinedTest
var nullTest = null

console.log(string)
console.log(number)
console.log(numberV2)
console.log(bool)
console.log(undefinedTest)
console.log(nullTest)
console.log(flt.toFixed(3))
console.log(flt.toPrecision(3))

//! Coercion
var firstName = 'Eli';
var age = 18;

console.log(firstName + ' ' + age)

// ! Mutation
alert(firstName + ' ' + age)

//! Puzzle
console.log('Value is : ', undefinedTest)
console.log('Value is : ', number, '\nSorry', string)

//! Description
    //? Topic : var 
        //# var variable_name = variable_value;
            //* variable name -> First letter must start by Character and Special Character only.
                //~ Special character can use in variable name example -> _ $
                //~ Special character can't use in variable name example -> . & # @ / \ # % etc.
            //* variable value -> 3 Standard Key of var detect 
                //~ Single or Double quote ('',"")      : String.
                //~ Number (3,9.99)                     : Number.
                //~ Logical (true,false)                : Boolean.
        //# var it's a set of Primitive JavaScript Data Type (Number,String,Boolean,Undefined,Null).
            //* Number      : Decimal , Floating point and Integer.
            //* String      : Character and Text.
            //* Boolean     : Logical -> True and False.
            //* Undefined   : If you don't set value into "var" it will detect as Undefined.
            //* Null        : Non-existence.
        //# var can define Data Type by itself -> And you can use operator as like Java Language.
                //~ Javascript have Dynamic JavaScript Data Type -> Data Type are automatic assigned to variable.
    //? Topic : coercion
        //# coercion is an javascript detection 
            //* When you put string plus with number in javascript they will transfer number into string -> coercion
    //? Topic : mutation
        //# Just like an coercion but use in alert or prompt method