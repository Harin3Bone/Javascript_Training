//! Ternary Operator Project
var person = 'Hikaru';
var age = 22;

    //? Ternary operator condition
    age > 22 ? console.log(person + ' older than 22') : console.log(person + ' younger than 22.');

    //? Ternary operator set value
    var status = age > 22 ? 'Married' : 'Single';

    //? Switch Case command (case String)
    switch(status){
        case 'Single':
            console.log(person + ' is ' + status + '. He want to have someone.');
            break;
        case 'Married':
            console.log(person + ' is ' + status + '. His wife is the best.');
            break;

        default : console.log(person + ' already DIE');
    }

    //? Switch case command (case Number)
    var number = 1;
    switch(number){
        case 1:
            console.log(person + ' have ' + number + ' wife.');
            break;
        case 2:
            console.log(person + ' have ' + number + ' babies.');
            break;

        default : console.log(person + ' already DIE');
    }

    //? Switch case command (case codition)
    switch(true){
        case age < 22 : 
            console.log(person + ' have not graduate yeu');
            break;
        case age == 22 : 
            console.log(person + ' will graduate soon');
            break;
        case age > 22 && age > 30 : 
            console.log(person + ' already graduate and will study abroad');
            break;
        
        default :  
            console.log(person + ' already graduate');
    }

//! Description
    //? Topic : Ternary operator
        //# Ternary syntax : condition ? statementA : statementB ;
            //* When condition is "true" will do statementA but if "false" will do statementB.
        //# Ternary it's just like If-Else statement (but it shorter than that).
                //~ Ternary can't use if your variable is "undefined".
    //? Switch-Case statement
        //# Switch-case syntax : 
            //* switch(result){
            //*     case condition1 : 
            //*         statement1;
            //*         break;
            //*     case condition2 : 
            //*         statement2;
            //*         break;  
            //*     default : 
            //*         statement3;
            //* }
        //# When result is equal in case result -> will do in case statement
                //~ break; use for when do break work flow because if you do conditio1 but don't have break.
                //~ result will continue to do another case until end of switch statement or found break.

                //~ default case it mean when result is not contain anything in case it will do default statement.