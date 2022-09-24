'use strict'

const axios = require('axios')
const Promise = require('bluebird')

let pokemonsApi = []
let urls = []
let pokemons = []
let pokemon = 0

async function api() {await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=40')
.then(res => {pokemonsApi = res.data.results})}

async function pokeDetail(param) {
    const poke = await axios.get('https://pokeapi.co/api/v2/pokemon/'+ param )
    return poke.data   
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






