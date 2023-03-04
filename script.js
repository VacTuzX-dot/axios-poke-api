let apiUrl = "https://pokeapi.co/api/v2/pokemon/";
let input = document.querySelector(".pokemon-input");
let pokemonName = document.querySelector(".pokemon-name");
let pokemonImg = document.querySelector(".pokemon-image");

function getpokemonData() {
  axios
    .get(apiUrl + input.value)
    .then(function (response) {
      pokemonName.innerHTML = response.data.forms[0].name;
      pokemonImg.src = response.data.sprites.front_default;
      pokemonImg.classList.remove("show");
      pokemonName.classList.remove("show");
      setTimeout(function () {
        pokemonImg.classList.add("show");
        pokemonName.classList.add("show");
      }, 100);
    })
    .catch(function (error) {
      pokemonName.innerHTML = "Error 404.";
      pokemonImg.src = " ";
    });
}

let button = document.querySelector(".pokemon-button");
button.addEventListener("click", getpokemonData);
