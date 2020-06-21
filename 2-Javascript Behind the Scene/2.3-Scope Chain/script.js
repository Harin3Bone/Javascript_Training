//! Scope Chain Project
    //? Scope Chain
    var x = 'Hello';
    first();

    function first() {
        var y = 'Hi';
        second()

        function second() {
            var z = 'Hey';
            console.log('Scope Chain : ' + x + ' ' + y + ' ' + z);
            //* Hello + Hi + Hey -> Lexically Scope Chain
        };
    };
    

    //? Execution Stack
    var a = 'Hello';
    one();

    function one() {
        var b = 'Hi';
        two();

        function two() {
            var c = 'Hey';
            three();
        };
    };

    function three(){
        var d = 'Ayase';
        
        // console.log('Execution Stack : ' + a + ' ' + b + ' ' + c + ' ' + d);
        //! ERROR Because b , c is not in third() scope

        console.log('Execution Stack : ' + a + ' ' + d);

    }
    


//! Description
        //? Topic : Scope
            //# Scope in Javascript count only code in "Function Block" 
                //* In another language (Ex: Java , C# , PHP) will count "If - Block" , "For Block" , "While Block" as scope
                //* Does not like a Javascript.
            //# Lexical Scope = Function in Function can access "Variable" & "Object" outer function 
                    //~ Will explain in example code on practice 