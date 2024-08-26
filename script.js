document.addEventListener('DOMContentLoaded', () => {
    let a, b, operator, result = [];

    // const btn_add = document.getElementById('btn_add');
    // const btn_sub = document.getElementById('btn_sub');
    // const btn_mult = document.getElementById('btn_mult');
    // const btn_divi = document.getElementById('btn_divi');
    // const btn_equal = document.getElementById('btn_equal');


    function operate(a, b, operator) {
        if (operator === '+') { return alert(a + b); }
        else if (operator === '-') { return alert(a - b); }
        else if (operator === '*') { return alert(a * b); }
        else if (operator === '/') { return alert(a / b); }
    }


    function populateDisplay() {
        
    }


    let buttons = document.querySelectorAll('.calc_btns');

    buttons.forEach((button) => { 
            button.addEventListener('click', () => { 
                alert('BUTÃO');
            });
    });


    // btn_add.addEventListener('click', () => { operator = '+'; });
    // btn_sub.addEventListener('click', () => { operator = '-'; });
    // btn_mult.addEventListener('click', () => { operator = '*'; });
    // btn_divi.addEventListener('click', () => { operator = '/'; });
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