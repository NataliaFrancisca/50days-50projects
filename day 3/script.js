let btnOpen = document.getElementById("open");
let btnClose = document.getElementById("close");
let contentTela = document.querySelector(".content");
let circle = document.querySelector(".circle");


btnOpen.onclick = function(){
	circle.classList.add("rotateButton");
	contentTela.classList.add("show-nav");
}

btnClose.onclick = function(){
	circle.classList.remove("rotateButton");
	contentTela.classList.remove("show-nav");
}