document.addEventListener('DOMContentLoaded', () => {
    let a, b, operator, result = [];
    let numbers = [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ];


    const btn_add   = document.querySelector('.btn-add');
    const btn_sub   = document.querySelector('.btn-sub');
    const btn_mult  = document.querySelector('.btn-mult');
    const btn_div   = document.querySelector('.btn-div');
    const btn_equal = document.querySelector('.btn-equal');
    const btn_clear = document.querySelector('.btn-clear');


    btn_add.addEventListener('click', () => { operator = '+'; });
    btn_sub.addEventListener('click', () => { operator = '-'; });
    btn_mult.addEventListener('click', () => { operator = '*'; });
    btn_div.addEventListener('click', () => { operator = '/'; });
    


    function operate(a, b, operator) {
        if (operator === '+') { return alert(a + b); }
        else if (operator === '-') { return alert(a - b); }
        else if (operator === '*') { return alert(a * b); }
        else if (operator === '/') { return alert(a / b); }
    }




    function populateDisplay() {
        
    }


    let btn_numbers = document.querySelectorAll('.btn-number');

    
    btn_numbers.forEach((button, index) => {
        button.addEventListener('click', () => {
            let num = numbers[index];
            alert("I'm number " + num);

            (num) => {
                
            }
        });
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