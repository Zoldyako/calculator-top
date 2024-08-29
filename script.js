document.addEventListener('DOMContentLoaded', () => {
    let a, b, result = [];
    let operator = ["+", "-", "*", "/"];
    let numbers = [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ];

    const BTN_OPERATOR  = document.querySelectorAll('.btn-operator');
    const BTN_NUMBERS   = document.querySelectorAll('.btn-number');
    const BTN_EQUAL     = document.querySelector('.btn-equal');
    const BTN_CLEAR     = document.querySelector('.btn-clear');
    const DISPLAY       = document.querySelector('#display');
    const CURRENT       = document.querySelector('#current-calc');


    function operate(a, b, operator) {
        if (operator === '+') { return alert(a + b); }
        else if (operator === '-') { return alert(a - b); }
        else if (operator === '*') { return alert(a * b); }
        else if (operator === '/') { return alert(a / b); }
    }


    function populateDisplay() {
        
    }


    function addToCurrentCalc(text) {
        current.innerText += text;
    }

    
    BTN_NUMBERS.forEach((button, index) => {
        button.addEventListener('click', () => {
            addToCurrentCalc(numbers[index]);
        });
    });


    BTN_CLEAR.addEventListener('click', () => { 
        current.innerText = '';
    });





    
    // btn_equal.addEventListener('click', () => {
        
    //     if (a === undefined || b === undefined) {
    //         a = undefined, b = undefined;
    //         return alert('ERROR: You need 2 values for the calculation!');
    //     }

    //     else if (operator === undefined) {
    //         return alert("ERROR: You need to select an operator for the calculation!");
    //     }

    //     operate(a, b, operator);
    // });
});