const calculatorBody = document.querySelector('.calculator');
let input = document.querySelector('.result');
let operand1, operand2, operator, wasEvaluated;
let expressionArray = [operand1 = '0', operator = '', operand2 = '', wasEvaluated = false];
operand1 = '0';
operator = '';
operand2 = '';
wasEvaluated = false;
let finishWasPressed = false;

const changeInput = buttonValue => {
	// console.log('#buttonValue', buttonValue);
	if (input.value === '0' && buttonValue !== '.') {
		input.value = buttonValue
	} else {
		input.value = input.value + buttonValue
	}
}

const showOperator = buttonValue => {
	// console.log('#buttonValue', buttonValue);
	input.value = buttonValue;
}

calculatorBody.addEventListener('click', () => {
	let digitPressed = event.target.closest('.digit');
	let clearButtonPressed = event.target.closest('.clear');
	let operatorPressed = event.target.closest('.operator');
	let finishPressed = event.target.closest('.finish');
	let clearHistoryPressed = event.target.closest('.clear__storage');
	// console.log(clearHistoryPressed)
	if (!digitPressed && !operatorPressed && !finishPressed && !clearButtonPressed && !clearHistoryPressed) return;

//на цифру или точку
	if (digitPressed) {
		digitWasPressed()
	}
	// на оператор
	if (operatorPressed) {
		operatorWasPressed();
	}

	//дальше только нажатие на =
	if (finishPressed) {
		enterWasPressed();
	}
	//на clear
	if (clearButtonPressed) {
		console.log('clear')
		clearInput();
	}
//очистка истории
	if (clearHistoryPressed) {
		console.log('clear stor')
		localStorage.removeItem('savedHistory');
		document.querySelector('.history ul').innerHTML = '';
	}

})


