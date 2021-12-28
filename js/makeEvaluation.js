const makeEvaluation = (operand1, operator, operand2) => {
	let result = 0;
	switch (operator) {
		case '/':
			// console.log('/');
			+operand2 !== 0 ? result = +operand1 / +operand2 : result = 'Ошибка'
			break;
		case '*':
			// console.log('*')
			result = +operand1 * +operand2;
			break;
		case '+':
			// console.log('+')
			result = (+operand1 * 1000 + +operand2 * 1000) / 1000;
			break;
		case '-':
			// console.log('-')
			result = (+operand1 * 1000 - +operand2 * 1000) / 1000;
			break;
	}
	let stringForHistory = [operand1, operator, operand2, '=', result].join(' ');
	console.log('#hist', stringForHistory);
	addToHistory(stringForHistory);
	return input.value = result;
}