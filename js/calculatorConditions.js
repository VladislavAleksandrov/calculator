const digitWasPressed = (key = '') => {
	let digitPressed = event.target.closest('.digit');

if (key === '') {
	key = digitPressed.textContent;
}
	if (operand1 === 'Ошибка') clearInput();

	if (wasEvaluated && operand2) {
		console.log('#0')
		clearInput();
		wasEvaluated = false;
	}

	if (operator === '') {
		console.log('#1 изменение операнда 1')
		changeInput(key);
		operand1 = input.value;
		finishWasPressed = false;
	} else if (operator && !operand2) {
		console.log('#2 ввод операнда 2')
		input.value = '0';
		changeInput(key);
		operand2 = input.value;
		wasEvaluated = false;
	} else if (operator && operand2) {
		console.log('#3 изменение операнда 2')
		changeInput(key);
		operand2 = input.value;
	}
	expressionArray = [operand1, operator, operand2]
	console.log(expressionArray)
	console.log('#выражение', operand1, operator, operand2)
}

const operatorWasPressed = (key = '') => {
	let operatorPressed = event.target.closest('.operator');

	if (key === '') {
		key = operatorPressed.textContent;
	}

	if ((wasEvaluated && !operand2 || !operand2 && !operator)) {
		console.log('#4 ввод оператора')
		showOperator(key);
		operator = key;
		operand2 = '';
	} else if (!operand2 && operator) {
		console.log('#5 замена оператора')
		showOperator(key)
		operator = key
	} else if (operand2 && finishWasPressed) {
		console.log('#6 замена оператора после автозаполнения операнда 2')
		showOperator(key)
		operator = key
		operand2 = ''
		finishWasPressed = false;
	} else if (operand2 && !finishWasPressed) {
		console.log('#7 считаем, нажав на оператор')
		makeEvaluation(operand1, operator, operand2);
		operand1 = input.value;
		operator = key;
		operand2 = '';
		wasEvaluated = true;
	}
	expressionArray = [operand1, operator, operand2]
	console.log(expressionArray)
	console.log('#выражение', operand1, operator, operand2)
}

const enterWasPressed = () => {

	if (operator && !operand2) {
		console.log('#8 нажатие на = без введённого операнда 2');
		operand2 = operand1;
		makeEvaluation(operand1, operator, operand2);
		operand1 = input.value;
		wasEvaluated = true;
		finishWasPressed = true;
	} else if (operand2 && operator) {
		console.log('#9 считаем');
		makeEvaluation(operand1, operator, operand2);
		operand1 = input.value;
		wasEvaluated = true;
		finishWasPressed = true;
	}
	expressionArray = [operand1, operator, operand2]
	console.log(expressionArray)
	console.log('#выражение', operand1, operator, operand2)
}