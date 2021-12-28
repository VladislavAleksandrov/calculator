const getIP = (json) => {
	// console.log("My public IP address is: ", json.ip);
	document.querySelector('.js-ip').append(json.ip);
}
