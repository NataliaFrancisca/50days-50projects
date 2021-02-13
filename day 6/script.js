const containers = [...document.querySelectorAll('.container')];

console.log(containers);


	window.addEventListener("scroll", () => {

		let height = window.innerHeight / 5 * 4;
		console.log(height);

		//getBoundingClientRect() -> pega as informações relacionadas a altura, largura, distancia do topo.

			containers.forEach(box => {
				const boxTop = box.getBoundingClientRect().top;

				if(boxTop < height){
					box.classList.add('show')
				}else{
					box.classList.remove('show')
				}
			})

	})