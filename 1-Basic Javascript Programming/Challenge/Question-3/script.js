//! Coding Challenge 3
    //? Question : John and his family went on a holiday and went to 3 deferent restaurant.  
    //? Bills price is $124 , $48 , $268
    //? He want to tip waiter/waitress 20% if bill < $50
    //? He want to tip waiter/waitress 15% if $50 < bill < $200
    //? He want to tip waiter/waitress 10% if bill > $200 
        //# Condition
            //* 1.Containing all 3 tips (one for each bill)
            //* 2.Containing 3 final paid amount (bill + tip).
                //~ HINT : To calculate 20% of value you can simply multiply if with 20/200 = 0.2

//! Specify variable
var bills = [124,48,268];
var tips = [];
var result = [];

//! My Solution (2nd)
function billCalculate(bills){
    var percent;
    if (bills < 50) {
        percent = 0.2;
    } else if (bills >= 50 && bills <= 200) {
        percent = 0.15;
    } else {
        percent = 0.1;
    }
    return bills * percent;
}

function resultCalculate(bills,tips){
    return bills+tips;
}

tips.push(billCalculate(bills[0]));
tips.push(billCalculate(bills[1]));
tips.push(billCalculate(bills[2]));

result.push(resultCalculate(bills[0],tips[0]))
result.push(resultCalculate(bills[1],tips[1]))
result.push(resultCalculate(bills[2],tips[2]))

//! My Solution (1st)
// //* BILL&TIP RESTAURANT 1
// if (bills[0] < 50) {
//     tips[0] = bills[0] * 0.2;
// } else if (bills[0] > 50 && bills[0] < 200) {
//     tips[0] = bills[0] * 0.15;
// } else {
//     tips[0] = bills[0] * 0.1;
// }
// //* BILL RESTAURANT 2
// if (bills[1] < 50) {
//     tips[1] = bills[1] * 0.2;
// } else if (bills[1] > 50 && bills[1] < 200) {
//     tips[1] = bills[1] * 0.15;
// } else {
//     tips[1] = bills[1] * 0.1;
// }
// //* BILL RESTAURANT 3
// if (bills[2] < 50) {
//     tips[2] = bills[2] * 0.2;
// } else if (bills[2] > 50 && bills[2] < 200) {
//     tips[2] = bills[2] * 0.15;
// } else {
//     tips[2] = bills[2] * 0.1;
// }

// result.push(bills[0]+tips[0]);
// result.push(bills[1]+tips[1]);
// result.push(bills[2]+tips[2]);

//! Print to console
for (var x=0;x<bills.length;x++){
    console.log('Bill cost '+ (x+1) + ' : $' + bills[x]);
}
console.log('--------------------');
for (var y=0;y<tips.length;y++){
    console.log('Tip cost '+ (y+1) + ' : $' + tips[y]);
}
console.log('--------------------');
for (var z=0;z<result.length;z++){
    console.log('Result cost '+ (z+1) + ' : $' + result[z]);
}
console.log('--------------------');
