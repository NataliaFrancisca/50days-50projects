let circle = [...document.getElementsByClassName("circle")];
let btnNext = document.getElementById("btnNext");
let btnPrev = document.getElementById("btnPrev");

let steps = 1;

	btnNext.addEventListener('click', () => {
		btnPrev.disabled = false;

		const selectCircle = circle[steps]; //traz o selecionado
		selectCircle.classList.add("selected");
		steps++;

		const progressBullet = circle[steps - 2];
		progressBullet.classList.add("circleProgress");

			if(steps === 4){
				btnNext.disabled = true;
				btnPrev.disabled = false;
			}
	});


	btnPrev.addEventListener('click', () => {

		const selectCircle = circle[steps - 1];
		selectCircle.classList.remove("selected");
		steps--;

		const progressBullet = circle[steps - 1];
		progressBullet.classList.remove("circleProgress");

			if(steps === 1){
				btnPrev.disabled = true;
				btnNext.disabled = false;
			}
	});