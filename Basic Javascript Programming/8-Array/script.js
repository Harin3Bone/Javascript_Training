//! Array Project

var names = ['Hiroto','Hibiki','Hikaru'];
var years = [1997,1998,1999];
var yeahs = new Array (1995,1996,1997);

    //? Array definition
    console.log(names);
    console.log(years);
    console.log(yeahs);
    console.log(names[2]);
    //// console.log('-------------------');

    //? Change value in array
    names[0] = 'Hiragi';
    console.log(names);
    //// console.log('-------------------');

    //? Length of array
    console.log(names.length);
    //// console.log('-------------------');

    //? Insert value in array
    names[names.length] = 'Himiko';
    console.log(names.length); 
    console.log('-------------------');

    //? Different data type in 1 array
    var hikari = ['Hikari','Higashigata',2002,'Student',false];
    console.log('Default    : ' + hikari + '                 Length : ' + hikari.length);

    hikari.push('Pink');
    console.log('Push       : ' + hikari + '            Length : ' + hikari.length);
    
    hikari.unshift('Ms.');
    console.log('Unshift    : ' + hikari + '        Length : ' + hikari.length);
    
    hikari.pop();
    console.log('Pop        : ' + hikari + '             Length : ' + hikari.length);

    hikari.shift();
    console.log('Shift      : ' + hikari + '                 Length : ' + hikari.length);
    
    console.log('-------------------');
    console.log(hikari.indexOf(2002));
    console.log(hikari.indexOf(1997));
    var isProgrammer = hikari.indexOf('Programmer') === -1 ? 'Hikari is not a programmer' : 'Hikari is a programmer';
    console.log(isProgrammer);

//! Description 
    //? Topic : Array
        //# Array is just like a collection of value in 1 variable.
        //# When you count position of array value must start with 0
            //* Example : Array have 3 value -> 0 - 1 - 2 
    //? Topic : Array Command
        //# push            = Insert value in Array[Array.length] position. (Last position)
        //# unshift         = Insert value in Array[0]. (First position)
            //* But Array[0] not lost it will move all of value position.
        //# pop             = Delete value in Array[Array.length] position (Last position)
        //# shift           = Delete value in Array[0]. (First position)
            //* After delete then all of value in array will move position.
        //# indexOf(value)  = Check position of value.
            //* If value you check is don't have in array. The result will get -1
                //~ indexOf is very useful for check value is in array when you have a large size of array
        