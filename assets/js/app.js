'use strict'

let buttons = document.querySelectorAll('.button_item');
let clearButton = document.querySelector('.clear-btn');
let additionButton = document.querySelector('.plus-btn');
let outputArea = document.querySelector('.common-value');
let equalsButton = document.querySelector('.equals-btn');
let outputValue = '';


console.log(buttons)



if(outputValue == undefined){
	outputValue = '0';
}

//Вызов события при клике сразу для всех кнопок
for(let i = 1; i < 16; i++){
	buttons[i].addEventListener('click', numberInput);
}


equalsButton.addEventListener('click', equals);
clearButton.addEventListener('click', clearOutput);


function numberInput(){
	let commonNumber = event.target.innerHTML;
	outputValue = outputValue + commonNumber;
	outputArea.innerHTML = outputValue;
}
function clearOutput(){
	console.log('clear');
	outputArea.innerHTML = '';
	outputValue = '';
}
function equals(){
	if(outputValue == undefined){
		outputValue = '0';
		outputArea.innerHTML = outputValue;
	}else {
		outputValue = eval(outputValue);
		outputArea.innerHTML = outputValue;
	}

}