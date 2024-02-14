// hacemos un selector para poder interactuar con los datos que mandemos a traer
const $pokemon = document.querySelector('#pokemon');
    function renderPokemon(image){
        $pokemon.setAttribute('src', image)
}
// constatnte del api que vamos a consumir 
const api=(`https://pokeapi.co/api/v2/`)

fetch(`https://pokeapi.co/api/v2/pokemon/25/`)
.then(response => response.json())
.then(pokemon=>{
    // ejecutamos un debugger para poder visualizar los datos por consola
    // debugger  
     renderPokemon(pokemon.sprites.front_default)
     card.innerHTML = `
     <img class="pokemon-image" src="${sprites.front_default}" alt="${name}">
     <h2>Nombre: ${name}</h2>
     <h3>Habilidades:</h3>
     <ul>${abilities.map(({ ability }) => `<li>${ability.name}</li>`).join('')}</ul>
     <h3>Estadísticas:</h3>
     <ul>${stats.map(({ stat, base_stat }) => `<li>${stat.name}: ${base_stat}</li>`).join('')}</ul>
   `;
})
// .then(data => {
//     let pikachu = document.getElementById('pikachudiv')
//     pikachu.innerHTML=$data.name;
// })










