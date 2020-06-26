//! This Project
    //? 'this' Global Variable
    //* 'this' = Windows Object -> {}
    // console.log(this);

    //? 'this' Function
    calculateAge(2002)

    function calculateAge(year) {
        var todayYear = 2020
        // console.log('Year = ' + (this.todayYear - year));
        // console.log('Today Year = ' + this.todayYear);

        //* 'this' = Default Object (Window Object) -> Object [global] (Regular Function)
        //! Because this function is 'Function Declaration' in 'Global Scope' -> Global Execution
        // console.log(this);
    }

    //? 'this' Object
    var ayase = {
        firstName: 'Eli',
        lastName: 'Ayase',
        birthYear: 1998,
        calculateAge: function () {
            //# 'this' = ayase Object -> { firstName: 'Eli' , ...} (Method)
            // console.log(this);

            console.log(this.lastName + ' ' + this.firstName + 'age is : ' + (2020 - this.birthYear));

            function innerFunction() {
                //~ 'this' = Object [global] (Regular Function)
                //! Method is calculateAgeObject of the ayase Object
                //! But innerFunction() is inside calculateAgeObject Method it still a Regular Function in                 
                // console.log(this);
            }

            //~ So when we call innerFunction() will no longer point to the ayase Object -> Instead point to the Default Object (Window Object)
            // innerFunction();
        }
    }

    //# Method Call
    ayase.calculateAge();

    //? 'this' assigned value
    var hayasaka = {
        firstName: 'Ai',
        lastName: 'Hayasaka',
        birthYear: 2002
    }

    //! Borrow ayase method from ayase object to hayasaka object
    hayasaka.calculateAge = ayase.calculateAge;
    hayasaka.calculateAge();


//! Description
        //? Topic : 'This' Keyword
            //# Regular Function Call ('this' Global Variable & 'this' Function)
                //* the 'this' keyword points at the global object. (the window object in browser)
            //# Method Call ('this' Object)
                //* the 'this' variable points to the object that is calling the method.                    
            //# The 'this' keyword is not assigned a value until a function where it's defined is actually called. 
            //# ('this' assigned value)
                //* 'this' variable only assigned a value as soon as an object call a method                    
                    