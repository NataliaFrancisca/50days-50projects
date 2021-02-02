let btnOpen = document.querySelector(".openSearch");
let inputSearch = document.querySelector(".inputSearch");
let contentSearch = document.querySelector(".contentPesquisa");

btnOpen.addEventListener("click", () => {

	contentSearch.classList.toggle('active')
    inputSearch.focus()

})