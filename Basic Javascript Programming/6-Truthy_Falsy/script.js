//! Truthy and Falsy Project
var variable;
var value = 0;
var valid = '';
var valve = null;
var view = NaN;

    //? Defined variable
    if (value || value === 0) {
        console.log('Variable has been defined');
    } else {
        console.log('Variable has not been defined');
    }

    //? Undefined variable
    if (variable) {
        console.log('Variable has been defined');
    } else {
        console.log('Variable has not been defined');
    }

    //? Zero variable
    if (value) {
        console.log('Variable has been defined');
    } else {
        console.log('Variable has not been defined');
    }

    //? Empty String
    if (valid || valid === 0) {
        console.log('Variable has been defined');
    } else {
        console.log('Variable has not been defined');
    }

    //? Null
    if (valve) {
        console.log('Variable has been defined');
    } else {
        console.log('Variable has not been defined');
    }

    //? NaN
    if (view) {
        console.log('Variable has been defined');
    } else {
        console.log('Variable has not been defined');
    }

//! Description
    //? Topic : Falsy value
        //# Falsy value is a false when evaluate in if/else condition.
        //# False value are Undefined , Null , Zero , Empty String , Not a Number
            //* Example : undefined , null , 0 , '' , NaN
    //? Topic : Truthy Value
        //# !Falsy value.    