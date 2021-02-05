let textLoader = document.querySelector(".loading-text");
let imagem = document.querySelector(".imgBlur");
var load = 0 ;

var myVar = setInterval(focusing, 30);


function focusing(){
	load++;

	console.log(load);

	if(load > 100){
		clearInterval(myVar); //quando chegar no 99, ele para;
		textLoader.style.display = "none";
	}

	textLoader.innerHTML= `${load}%`;
	imagem.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

