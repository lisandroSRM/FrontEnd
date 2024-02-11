const pokemonContainer =document.querySelector(".pokemon-container");

function fetchPokemons(number){
    for(let i=1; i <= number; i++){
       fetchPokemon(i);

       function fetchPokemon(id){
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => res.json())
        .then((data)=>console.log(data.name));

        // fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        // .then((res) => res.json())
        // .then((data)=>console.log(data.id));

        // fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        // .then((res) => res.json())
        // .then((data)=>console.log(data.stats));

        // fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        // .then((res) => res.json())
        // .then((data)=>console.log(data.order));

        // fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        // .then((res) => res.json())
        // .then((data)=>console.log(data.abilities));
        }
            
    }
}
fetchPokemons(10);