//! Coding Challenge 5
    //? Question : John and his family went on a holiday and went to 3 different restaurant.  
    //? Bills price is $124 , $48 , $268 , $180 , $42
    //? He want to tip waiter/waitress 20% if bill < $50
    //? He want to tip waiter/waitress 15% if $50 <= bill < $200
    //? He want to tip waiter/waitress 10% if bill => $200 
        //# Condition
            //* 1.Create an object with an array for the bill values.
            //* 2.Add method to calculate the tip.
            //* 3.This method should include a loop to iterate over all the paid bills and dfo the tip calculations.
            //* 4.As an output create 
            //todo 4.1) a new array containing all tips
            //todo 4.2) an array containing final paid amounts (bill + tip)
                //~ HINT1 : To calculate 20% of value you can simply multiply if with 20/200 = 0.2
                //~ HINT2 : Start with 2 Empty array [] as properties and then fill them up in the loop
                //~ KEY   : Use everything you learn in 10 lesson to solve the problem
    //? EXTRA : Mark family also went on a holiday go different 4 restaurant
    //? Bills price is $77 , $375 , $110 , $45
    //? He want to tip waiter/waitress 20% if bill < $100
    //? He want to tip waiter/waitress 15% if $100 <= bill < $300
    //? He want to tip waiter/waitress 10% if bill > $300
        //# Condition
            //* 5.Implement the same functionality as before, this time using Mark's tipping rules
            //* 6.Create a function (not a method) to calculate the average of a given array of tips.
            //* 7.Calculate the average tip for each family
            //* 8.Log to the console which family paid the highest
                //~ HINT : Loop over the array and in each iteration store the current sum in a variable (Starting from 0)
                //~ After you have the sum of the array, divide it by the number of elements in it (That's how you calculate the average)

//! My Solution
function checkWhoHighest(john,mark){
    if (john>mark){
        console.log('John family is the most paid highest tip in this holiday trip : $' +john);
    }
    else{
        console.log('Mark family is the most paid highest tip in this holiday trip : $' +mark);
    }
}

var johnBill = {
    bills: [124, 48, 268, 180, 42],
    tip: [],
    result: [],
    calculate: function () {
        for (var x = 0; x < this.bills.length; x++) {
            var bill = this.bills[x]; 
            var percent;
            if (this.bills[x] < 50) {
                percent = 0.2;
            } else if (this.bills[x] >= 50 && this.bills[x] < 200) {
                percent = 0.15;
            } else {
                percent = 0.1;
            }
            this.tip[x] = this.bills[x] * percent;
            this.result[x] = this.bills[x] + this.tip[x];
        }
    }
}

var markBill = {
    bills: [77, 475, 110, 45],
    tip: [],
    result: [],
    calculate: function () {
        var percent;
        for (var y = 0; y < this.bills.length; y++) {
            var percent;
            if (this.bills[y] < 100) {
                percent = 0.2;
            } else if (this.bills[y] >= 100 && this.bills[y] < 300) {
                percent = 0.1;
            } else {
                percent = 0.25;
            }
            this.tip[y] = this.bills[y] * percent;
            this.result[y] = this.bills[y] + this.tip[y];
        }
    }
}

function average(tip){
    allTip = 0;
    for (var counter = 0 ; counter < tip.length ; counter++){
        allTip += tip[counter];
    }
    return averageTip = allTip/tip.length;
}

johnBill.calculate();
markBill.calculate();

console.log(johnBill);
console.log('----------------------------------------');
console.log(markBill);
console.log('----------------------------------------');

var johnAverage = average(johnBill.tip);
console.log('John average tip : $' + averageTip);

var markAverage = average(markBill.tip);
console.log('Mark average tip : $' + averageTip);

console.log('----------------------------------------');
checkWhoHighest(johnAverage,markAverage);