let output = document.querySelector('.output');
let buttons = document.querySelectorAll('button');
let strHisob = "";
let count = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        count += 1;
        if (count === 1) {
            output.textContent = "";
        }

        let value = button.dataset.value;

        if (value === 'AC') {
            strHisob = "";
            output.textContent = '0';
            count = 0; 
        } 
        else if (value === '=') {
                output.textContent = eval(strHisob);
                strHisob = output.textContent;
            }    else {
            strHisob += value;
            output.textContent += button.textContent;
        }
    });
});
