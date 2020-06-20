//! Execution Context & Execution Stack Project
    //? Execution Context
    var name = 'Ayase';         //# Global Execution

    function first(){           //# Global Execution
        var a = 'Hello';        //* Execution Context first()
        second();               //* Execution Context first()
        // third(); 
        var x = a + name;       //* Execution Context first()
        console.log(x)
    }

    function second(){          //# Global Execution
        var b = 'Hi'            //* Execution Context second()
        third();                //* Execution Context second()
        var z = b + name;       //* Execution Context second()
        console.log(z)
    }

    function third(){           //# Global Execution
        var c = 'Hey'           //* Execution Context third()
        // second();
        var z = c + name        //* Execution Context third()
        console.log(z)
    }

    first();                    //# Global Execution    

    //? Execution Stack
        //# Reading execution 
            //~ Execution Context third()   [3]
            //~ Execution Context second()  [2]
            //~ Execution Context first()   [1]
            //~ Global Execution Context    [0]
        //# Process execution 
            //~ 1.Do var name = 'Ayase';
            //~ 2.Do code in function third()
                //* Pop Execution third() out
            //~ 3.Do code in function second()
                //* Pop Execution second() out
            //~ 4.Do code in function first()
                //* Pop Execution first() out
            //~ 5.Do first();

    
//! Description
        //? Topic : Execution Context
            //# Global Execution Context (Default)            
                //* variable or function (Code) is not in function

        //? Topic : Execution Stack
            //# Order of execution access
                //* Read code from 'TOP' to 'DOWN' 
                    //~ Stack start from [0] to infinite (Just like a box start from ground)
                //* Then after push all of stack finish