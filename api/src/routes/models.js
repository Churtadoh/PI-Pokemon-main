'use strict'

const axios = require('axios')
const Promise = require('bluebird')

let pokemonsApi = []
let urls = []
let pokemons = []

async function api() {await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=10')
.then(res => {pokemonsApi = res.data.results})}

async function pokeDetail(param) {
    const poke = await axios.get('https://pokeapi.co/api/v2/pokemon/'+ param )
    return {
      name: poke.data.name.charAt(0).toUpperCase() + poke.data.name.slice(1),
      id: poke.data.id,
      types: poke.data.types,
      img: poke.data.sprites.other.dream_world.front_default      
    }   
}

const url= () => {
    for(let i=0;i<=pokemonsApi.length-1;i++){
        urls.push(`${pokemonsApi[i].url}`)
    }
}

const promise = (urls) => {
    return Promise.all(urls.map(fetchData))
    //return Promise.map(urls,fetchData )
}

const fetchData = (URL) => {
    return axios
      .get(URL)
      .then(function(response) {
        return {
          id: response.data.id,
          name: response.data.name,
          types: response.data.types,
          img: response.data.sprites.front_default
        };
      })
      .catch(function(error) {
        return { success: false };
      });
  }



async function bundle() {
    await api()
    url()
    promise(urls).then(resp=>{pokemons = resp}).catch(e=>{console.log(e)})
}     

bundle()



const getAllPokemon = () =>{  
    return pokemons
}

const getPokemonId = (param) =>{
      return pokeDetail(param)
}


module.exports = {
    getAllPokemon,
    getPokemonId
}






