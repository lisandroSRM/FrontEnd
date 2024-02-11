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
})
.then(data => {
    let pikachu = document.getElementById('pikachudiv')
    pikachu.innerHTML=$data.name;
})










