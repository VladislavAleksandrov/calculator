const history = document.querySelector('.history ul');
if (localStorage.savedHistory) history.innerHTML = JSON.parse(localStorage.savedHistory) // пока нет времени менять с innerhtml
const addToHistory = (string) => {
	let template = document.querySelector('#temp');
	let templateListElement = template.querySelector('li');
	let historyClone = template.content.cloneNode(true);
	historyClone.querySelector('li').textContent = string;
	history.append(historyClone);
	let savedHistory = history.innerHTML;
	localStorage.savedHistory = JSON.stringify(savedHistory);
}