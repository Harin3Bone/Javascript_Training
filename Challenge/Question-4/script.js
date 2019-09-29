//! Coding Challenge 4 
    //? Question : Mark and John are trying to compare their BMI 
    //? BMI Equation : BMI = Mass/(Height*2) or BMI = Mass/(Height*Height)
        //# Condition
            //* 1.Store Mark's and John's mass and height.
            //* 2.Calculate both their BMI.
            //* 3.Create boolean variable to compare information of both.
            //* 4.Print boolean result and tell something to know. Example Is Mark BMI Higher than John ? : True;
                //~ Mass -> Kilogram (kg) and Height -> Meter (m)
                //~ It's the same question as Challenge 1 but improve your code with function , object and method

//! My Solution
var mark = {
    name: 'Mark',
    mass: 50,
    height: 1.5,
    cal: function bmi(){
        this.bmi = this.mass/(this.height*2);
        return this.bmi;
    }
}

var john = {
    name: 'John',
    mass: 70,
    height: 1.85,
    cal: function bmi(){
        this.bmi = this.mass/(this.height*2);
        return this.bmi;
    }
}
mark.cal();
john.cal();

if (mark.bmi > john.bmi) {
    console.log('Mark BMI is more than john. \nMark BMI is ' + mark.bmi);
} else if (mark.bmi < john.bmi) {
    console.log('John BMI is more than john. \nJohn BMI is ' + john.bmi);
} else {
    compare.log('Mark and John have same bmi. \nTheir BMI is ' + mark.bmi);
}