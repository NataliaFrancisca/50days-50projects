let imagens = document.getElementsByTagName("div");
let body = document.getElementsByTagName("body");

	for(let y = 0; y < imagens.length; y++){
		
		imagens[y].onclick = function(){

			let active = document.getElementsByClassName("selected");
			active[0].className = active[0].className.replace(" selected", "");
			this.className += " selected";
		}

	
	}

