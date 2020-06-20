//! Object and Property Project
    //? Literal object
    var hikaru = {
        firstName: 'Hikaru',
        lastName: 'Higashikata',
        birthYear: 1997,
        family: ['Hikari','Himiko','Hisako','Hiroto'],
        job: 'Programmer',
        status: false
    }

        //# Use . annotation
        console.log(hikaru.birthYear);

        //# Use topic annotation
        console.log(hikaru['birthYear']);

        //# Use variable annotation
        var x = 'birthYear';
        console.log(hikaru[x]);

    //? Array in Literal object
    console.log('-------------');
    console.log(hikaru.family);
    console.log(hikaru.family[0]);
    console.log(hikaru['family'][0]);
    console.log('-------------');

    //? Change value in Literal object
        //# String value
        hikaru.job = 'Designer';
        console.log(hikaru.job);
        //# Number value
        hikaru.birthYear = 1999;
        console.log(hikaru.birthYear);
        
        //# Boolean value
        hikaru.status = true;
        console.log(hikaru.status);
        
        //# Array value
        hikaru.family.push('Hinagiku');
        console.log(hikaru.family);
        hikaru.family[4] = 'Hinata'
        console.log(hikaru.family);

    //? Print All
    console.log('-------------');
    console.log(hikaru);
    console.log('-------------');

    //? New object (Empty object)
    var haruto = new Object();
    haruto.firstName = 'Haruto';
    haruto['lastName'] = 'Haruomi';
    haruto.birthYear = 1995;
    haruto.family = ['Haruka','Haruna'];
    console.log(haruto);
    console.log('-------------');

//! Object and Method Project
var rider = {
    firstName: 'Decade',
    lastName: 'Hesei',
    birthYear: 2009,
    family: ['Diend','Kuuga','Tuskuyomi'],
    job: 'Rider',
    status: true,
    //// calculateAge: function(birthYear){
    ////     return 2019 - this.birthYear;
    //// },
    calculateAge: function(){
        this.age = 2019 - this.birthYear;
    }
};

//// console.log(rider.calculateAge());
rider.calculateAge();
console.log(rider);

//! Description
    //? Topic : Literal object
        //# Literal object syntax it just like a JSON file.
        //# Literal object can specify value 2 way
            //* First
                //~ var objectName = { 
                //~     property1: objectValue1,
                //~     property2: objectValue2
                //~ }
            //* Second
                //~ var objectName = new Object();
                //~ objectName.property1 = objectValue1;
                //~ objectName.property2 = objectValue2;
            
    //? Topic : Object properties
        //# Properties can be all of data type (String , Number , Boolean , Array , etc.)
        //# Can't use 'var' command in literal object.
    //? Topic : Object method
        //# Object method is mean function inside method bracket.
        //# 'this' command is mean you use variable in this object.
        //# method in object can return value or not return value like as normal function.