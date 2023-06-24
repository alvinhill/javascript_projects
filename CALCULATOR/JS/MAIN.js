// Creates object to keep track to values
const calculator = {
    // this will display a 0
    Display_Value: '0',
    // thiss will hold the first operand for any expression
    // will be set to null for now
    First_Operand: null,
    // this checks wether or not the second operand has be input
    Wait_Second_Operand: false,
    // this will hold the OPERATOR (null for now)
    operator: null,
      
    
};
// this modifies values when button is clicked
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = calculator;
// this checks if the Wait_Second_Operand is true and sets Display_Value
// to the key that was clicked on.

    if (Wait_Second_Operand === true) {
        calculator.Display_Value = digit;
        calculator.Wait_Second_Operand = false;
    } else {
        //this overrides display value if the current value is 0
        // otherwise it add on to it.
        calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;

    }
}
// this section handles decimal points
function Input_Decimal(dot) {
    // this ensures that accidental clicking of the decimal dosen't cause bugs.
    if (calculator.Wait_Second_Operand === true) return;
    if (!calculator.Display_Value.includes(dot)) {
        // if there is no decimal point entered -- put one there
        calculator.Display_Value += dot;
    }
}
// this section handles operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = calculator;
// when an operator key is pressed the number on the screen
// is  stored in - calculator.First_Operand if not already there
    const Value_of_Input = parseFloat(Display_Value);
    //checks to see if an operator already exits and if the Wait_Second_Operand is ture.
    // updates the operator and exits from the function
    if (operator && calculator.Wait_Second_Operand) {
        calculator.operator = Next_Operator;
        return;
   
}

if (First_Operand == null) {
    calculator.First_Operand = Value_of_Input;

} else if (operator) {// checks if operato exists already
    const Value_Now = First_Operand || 0;
    // if operator exists, property lookup is performed for the operator
    // in the Perform_Calculation object.
    // the function that matches the operator is executed.
    let result = Perfom_Calculation[operator](Value_Now, Value_of_Input);
    // here we added a fixed amount of numbers after the decimal
    result = Number(result).toFixed(9);
    // this will remove trailing zeros
    result = (result * 1).toString();
    calculator.Display_Value = parseFloat(result);
    calculator.First_Operand = parseFloat(result);


}
calculator.Wait_Second_Operand = true;
calculator.operator = Next_Operator;
}

const Perfom_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => First_Operand = Second_Operand,

};

function Calculator_Reset() {
    calculator.Display_Value = '0';
    calculator.First_Operand = null;
    calculator.Wait_Second_Operand = false;
    calculator.operator = null;
}

// this function updates the screen with the contents of Display_Value
function Update_Display() {
    // makes use of the calculator-screen class to target the
    // input tag of the HTML
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.Display_Value;
}

Update_Display();

    // this section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    // the target variable is an object that represents the element
    // that was clicked
    const { target } = event;
    // if the element that was clicked is not a button, the exit the function
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;

}
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
}
// ensures that AC clears all inputs from screen
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
    


})
