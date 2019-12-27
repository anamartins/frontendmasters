document.addEventListener('DOMContentLoaded',onDOMReady);

let display;
let operator = null;
let storedValue = null;
let operationValue = null;
let result = null;

function onDOMReady(){
    display = document.querySelector('.display');
    display.value = 0;

    let number = document.getElementsByClassName('number'); // gets in an array everything that has this class name

    for (let i=0; i<number.length; i++){ //atributtes a function on click in every button from the number array
        number[i].addEventListener('click', onNumberClick);
    }

    let operation = document.getElementsByClassName('operator');
    
    for (let i=0; i<operation.length; i++){
        operation[i].addEventListener('click', onOperationClick);
    }

    let clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', onClearButton);

    let backspaceButton = document.getElementById('backspace');
    backspaceButton.addEventListener('click', onBackspaceButton);

}

function onNumberClick(event){
    updateDisplay(event.target.innerText);
}

function onClearButton(event){
    display.value = 0;
    operator = null;
    storedValue = null;
    operationValue = null;
    result = null;

}

function onBackspaceButton(event){
    if (display.value.length == 1){
        display.value = 0;
    } else {
        display.value = display.value.substring(0,(display.value.length-1));
        console.log(`display.value = ${display.value}`);
        console.log(`lenght = ${display.value.length}`);
    } 

}

function onOperationClick(event){
    operator = event.target.innerText;

    if(storedValue == null){
        storedValue = display.value;
        display.value = 0;
    } 

    switch (operator){
        case('+'):
            operationValue = '+';
            break;
        
        case('-'):
            operationValue = '-';
            break;
        
        case('x'):
            operationValue = 'x';
            break;
        
        case('÷'):
            operationValue = '÷';
            break;

        case ('='):
            display.value = doOperation(operationValue);
            break;
    }

    
}

function doOperation(operationValue){
    switch (operationValue){
        case('+'):
            result = parseInt(storedValue) + parseInt(display.value);
            break;
        
        case('-'):
            result = parseInt(storedValue) - parseInt(display.value);
            break;
        
        case('x'):
            result = parseInt(storedValue) * parseInt(display.value);
            break;
        
        case('÷'):
            result = parseInt(storedValue) / parseInt(display.value);
            break;

    }
    storedValue = null;
    return result;
    
}



function updateDisplay(number){
    if (display.value == 0){
        display.value = number;
    } else {
        display.value +=number;
    } 
   
}