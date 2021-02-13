let content = document.querySelector(".elements");
let playstation = document.querySelector(".content-playstation");
let xbox = document.querySelector(".content-xbox");


	playstation.addEventListener("mouseenter", () => content.classList.add("hover-left"))
	playstation.addEventListener("mouseleave", () => content.classList.remove("hover-left"))

	xbox.addEventListener("mouseenter", () => content.classList.add("hover-right"))
	xbox.addEventListener("mouseleave", () => content.classList.remove("hover-right"))