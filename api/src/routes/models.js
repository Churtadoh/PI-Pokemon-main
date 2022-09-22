'use strict'

const axios = require('axios')

let pokemonsApi = []
let pokemons = []

/*async function pokemonDetail(el) {
    const poke = await axios.get(`${el.url}`)
    console.log(poke.data.id)
    return poke.data.id
    /*let obj = {
        id: poke.id,
        name: poke.name,
        types: poke.types,
        //img: apiPokemon.sprites.front_default
    }
    console.log(obj)
return poke}*/


async function api() { await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=40')
.then(res => {pokemonsApi = res.data.results})}

async function bundle() {
    await api()
    console.log(pokemonsApi)
    Promise.all(pokemonsApi.map(async el => {
        await axios.get(`${el.url}`)
        .then(res =>  {pokemons.push(
            {
                id:res.data.id,
                name: res.data.name,
                types: res.data.types,
                img: res.data.sprites.front_default
             }
            )}
            )
        }
      )
    )
}

bundle()





const getAllPokemon = () =>{  
    return pokemons
}


module.exports = {
    getAllPokemon
}





