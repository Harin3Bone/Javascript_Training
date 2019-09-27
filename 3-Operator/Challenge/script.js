//! Coding Challenge 1
    //? Question : Mark and John are trying to compare their BMI 
    //? BMI Equation : BMI = Mass/(Height*2) or BMI = Mass/(Height*Height)
        //# Condition
            //* 1.Store Mark's and John's mass and height.
            //* 2.Calculate both their BMI.
            //* 3.Create boolean variable to compare information of both.
            //* 4.Print boolean result and tell something to know. Example Is Mark BMI Higher than John ? : True;
                //~ Mass -> Kilogram (kg) and Height -> Meter (m)

//! My Solution
var massMark = 50;     
var heightMark = 1.6;

var massJohn = 70;
var heightJohn = 1.85;

var bmiMark = massMark/(heightMark*2);
var bmiJohn = massJohn/(heightJohn*2);

console.log('\nIs Mark BMI Higher than John ?',(bmiMark>bmiJohn));
//// console.log('\nIs Mark BMI Higher than John ?'+(bmiMark>bmiJohn));