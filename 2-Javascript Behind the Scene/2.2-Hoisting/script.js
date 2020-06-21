//! Hoisting Project
    //? Hoisting 
        //# You can call function in here because your function is "Function Declaration"
        calculateAge(2002);                                         

        //# This is Function Declaration -> That can be you "Hoisting"
        function calculateAge(year) {
            console.log('Execution Context : ' + (2020 - year));
        }

        //# Or you can put in here too
        // calculateAge(2002);

    //? Function Expression   
        //* You can't put in here
        // calculateAgeV2(2002)
        
        //* This is not Function Declaration -> It's "Function Expression"
        var calculateAgeV2 = function(year) {
            console.log('Function Declaration : ' + (2020 - year));
        }

        //* You only put function in here because your function is "Hoisting ("
        calculateAgeV2(2002)

    //? Variable Declaration
        //~ undefined because you have "Variable declaration" but you put before variable
        console.log('Variable before declaration : ' + age)

        //~ Error because you not variable declaration
        // console.log('Variable not declaration : ' + ages)

        var age = 18;

        //~ 18 because you have "Variable declaration" and "Execution Context" found age
        console.log('Variable after declaration : ' + age)

    //? Variable Declaration in Function        
        //! Function Declaration
        function declaration(){
            //! undefined Because age was not found but you have "Variable Declaration"
            console.log('Log Declaration in Function (Before variable declaration) : ' + age)

            var age = 23;
        
            //! 18 Because found age in declaration() , Works in Execution Context declaration() process
            console.log('Log Declaration in Function (After variable declaration) : ' + age)
        }

        //! Hoisting : This is "Global Execution" and then push "Execution Context declaration()"
        declaration();

        //! 18 because it found "Variable Declaration" on "Global" but age in declaration() is in "Execution Context declaration()"
        console.log('Log Declaration out Function : ' + age)


//! Description
        //? Topic : Execution Context
            //# Execution Stack must have "Global Execution" on first 
            //# You can call function before function because "Execution Stack" will do "Execution Context" after you call
        //? Topic : Hoisting
            //# Can use with "Function declaration" & "Variable declaration" only. 
                //* Hoisting is process in Creation phase it will be move all "Declaration" to the Top of the code in function scope
                    //~ var variableName = function() {} -> Function Expression not Function Declaration
                    //~ function functionName() {} -> Function Declaration

var numberOne = 1

function functionNumberOne() {
    var numberTwo = 2
    console.log(numberOne)

    function functionNumberTwo(){
        console.log(numberTwo)
    }

    functionNumberTwo()
}

functionNumberOne()