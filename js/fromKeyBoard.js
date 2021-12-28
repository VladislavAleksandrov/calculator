let key = '';
document.body.addEventListener('keydown', (event) => {
	// console.log(event.key)
	let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
	let operators = ['/', '-', '/', '*', '+'];
	if (digits.includes(event.key)) {
		key = event.key
		digitWasPressed(key);
	}
	if (operators.includes(event.key)) {
		key = event.key;
		operatorWasPressed(key);
	}
	if (event.key === 'Enter' || event.key === '='){
		console.log(event.key)
		enterWasPressed();
	}
	if (event.key === 'Backspace' || event.key === 'Delete') clearInput(); //так как нет кнопки стереть один символ, реализуя пока что только стереть всё
})
