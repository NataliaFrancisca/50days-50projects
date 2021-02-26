let btnJoke = document.querySelector(".btn-another-joke");
let textJoke = document.querySelector(".text-joke");


btnJoke.addEventListener("click", () => {
	generateJoke();
})

//using async and external jokes 
async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    
    const res = await fetch('http://icanhazdadjoke.com', config)
    
    const data = await res.json()
    textJoke.innerHTML = data.joke
}


//using local jokes

/* let jokes = [
	
	{id:1, joke: "Por que o pinheiro não se perde na floresta? - Porque ele tem um mapinha "},
	{id:2, joke: "Se o papai noel morrer, não estará em-trenós"},
	{id:3, joke: "O que é um pontinho amarelo na limusine? - É um milhonário"}
]*/

/* function getAnotherJoke(){

   let jokeRandom = jokes[Math.floor(Math.random()*jokes.length)];

   textJoke.innerHTML = jokeRandom.joke;

}*/