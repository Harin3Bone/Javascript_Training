//! Function Project

    //? Function with return value
    function calculateAge(birthYear) {
        return 2019 - birthYear;
    }

    var ageHiroto = calculateAge(1997);
    console.log(calculateAge(), calculateAge(1995), ageHiroto);

    //? Function with statement 
    function yearUntilRetirement(year, name) {
        var age = calculateAge(year);
        var retirement = 70 - age;
        console.log(name + ' retire in ' + retirement + ' years');
    }

    yearUntilRetirement(1995, 'Himitsu');

    //? Function statement
    var testFunction = function switching(job, nickname) {
        switch (job) {
            case 'Teacher':
                return nickname + ' is a ' + job;
                break;
            case 'Doctor':
                return nickname + ' is a ' + job;
                break;
            case 'Programmer':
                return nickname + ' is a ' + job;
                break;

            default:
                return nickname + ' is a freelance';
                break;
        }
    }

    console.log(testFunction('Programmer','Mark'));
    
//! Description
    //? Topic : Function
        //# function name (parameter1 , parameter2){ }
        //# Function can return value or not return value as your wish. 
        //# Function can get input from parameter inside bracket. (Can get 1 or more parameter)
    //? Topic : Expression