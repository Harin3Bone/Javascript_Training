//! Switch - Case
    //? Condition with break
    var testSwitchCase = 3
    switch (testSwitchCase) {
        case 1:
            console.log('This expression is 1')
            break;
        case 2:
            console.log('This expression is 2')
            break;
        case 3:
            console.log('This expression is ' + testSwitchCase)
            break;
        default:
            console.log('This expression is not 3')
            break;
    }

    //? Condition with continue
    var testSwitchCase2 = 'A'
    switch (testSwitchCase2) {
        case 'A':
            console.log('This expression is A')            
        case 'B':
            console.log('This expression is B')
            break;
        case 'C':
            console.log('This expression is C')
            break;
        default:
            console.log('This expression is character')
            break;
    }

    console.log('===============')

    //? Condition with Logical
    // var testSwitchCase3 = 3
    // switch (testSwitchCase3==5) {
    //     case 
    //     (testSwitchCase3 < 5):
    //         console.log('This expression is lower than 5')
    //         break;
    //     case (testSwitchCase3 == 5):
    //         console.log('This expression is equal 5')
    //         break;
    //     case (testSwitchCase3 > 5):
    //         console.log('This expression is greater than 5')
    //         break;
    //     default:
    //         console.log('This expression is NaN')
    //         break;
    // }
    
    //! Description
        //? Topic : Switch - Case
            //# switch (expression){
            //#     case condition1 : ... break;
            //#     case condition2 : ... break;
            //#     case condition3 : ... break;               
            //#     default : ... break;
            //# }            
                //* expression is keyword for check some thing is contain as condition in any case then will do in that case.       
                    //~ Case condition can not be Logical condition.   
                    //~ Case condition should be a Primitive Data Type (String , Number , Boolean).     
                //* default it not must to have -> If expression is not contain in any condition they will do in default case.
                    //~ But should have because is better to optimize.                    
                //* If each case not have break they will continue do another case until the end.

                    
        