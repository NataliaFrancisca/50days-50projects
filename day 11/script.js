
let key = document.querySelector(".key-text");
let keyCode = document.querySelector(".keyCode-text");
let code = document.querySelector(".code-text");

let containerBoxes = document.querySelector(".container-boxes");
let message = document.querySelector(".message");


document.addEventListener("keydown", function(event) {

	message.style.display = "none";
	containerBoxes.style.display = "flex";

	key.innerHTML = event.key;
	keyCode.innerHTML = event.which;
	code.innerHTML = event.code;

})