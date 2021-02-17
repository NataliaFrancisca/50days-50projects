let buttons = document.getElementsByTagName("button");
let audios = document.getElementsByTagName("audio");

for(let i = 0; i < buttons.length; i++){

	buttons[i].addEventListener("click", () => {
		for(let a = 0; a < audios.length; a++){
			if(audios[a].id == buttons[i].innerText){
				playSong(audios[a]);
			}else{
				stopSong(audios[a]);
			}
		}
	})
}

function playSong(theSound){
	theSound.play();
}

function stopSong(theSound){
	theSound.pause();
	theSound.currentTime = 0;
}