'use strict'

const axios = require('axios')
const Promise = require('bluebird');
const { Pokemon, Type } = require('../db');




async function apiTypes() {
      const api = await axios.get('https://pokeapi.co/api/v2/type')
      const types = api.data.results
      await types.map(el => Type.create({name: el.name}))
}

apiTypes();

async function getTypesDb(){
      return await Type.findAll()
}

async function api() {
      let pokemonsApi = []
      await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=13')
      .then(res => {
        pokemonsApi = res.data.results  
      })
      return pokemonsApi
}

async function pokeDetail(param) {
    const poke = await axios.get('https://pokeapi.co/api/v2/pokemon/'+ param )
    return {
      name: poke.data.name.charAt(0).toUpperCase() + poke.data.name.slice(1),
      id: poke.data.id,
      types: poke.data.types.map(el => el.type.name ).toString(),
      img: poke.data.sprites.other.dream_world.front_default,
      height: poke.data.height,
      weight: poke.data.weight,
      hp: poke.data.stats[0].base_stat,
      attack: poke.data.stats[1].base_stat,
      defense: poke.data.stats[2].base_stat,
      speed: poke.data.stats[5].base_stat    
    }   
}

const url= (pokemonsApi) => {
    let urls = []
    for(let i=0;i<=pokemonsApi.length-1;i++){
        urls.push(`${pokemonsApi[i].url}`)
    }
  return urls  
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
          name: response.data.name.charAt(0).toUpperCase() + response.data.name.slice(1),
          types: response.data.types.map(el => el.type.name).toString(),
          img: response.data.sprites.front_default,
          attack: response.data.stats[1].base_stat
        };
      })
      .catch(function(error) {
        return {
          id: 0,
          name: "Error",
          types: "Error",
          img: "Error",
          attack: 0
        };
      });
  }

async function pokemonsDb(){
    let db = await Pokemon.findAll({
    include: Type
  })
  let pokeDb = db.map(el => {
    return {
          id: el.dataValues.id,
          name: el.dataValues.name,
          types: el.dataValues.types.map(type => type.dataValues.name).toString(),
          img: el.dataValues.img,
          attack: el.dataValues.attack
    }
  })
  return pokeDb
}

async function pokemonDbPk(pk){
  let poke = await Pokemon.findByPk(pk,{
    include: Type
  })
  return {
          id: poke.dataValues.id,
          name: poke.dataValues.name,
          types: poke.dataValues.types.map(type => type.dataValues.name ),
          img: poke.dataValues.img,
          attack: poke.dataValues.attack,
          height: poke.dataValues.height,
          weight: poke.dataValues.weight,
          hp: poke.dataValues.hp,
          defense: poke.dataValues.defense,
          speed: poke.dataValues.speed
  }
}



async function bundle() {
    let pokemonsApi = await api()
    let urls = url(pokemonsApi)
    const a = promise(urls).then(resp=> resp).catch(e=>{console.log(e)})
    return a
}     

//bundle()



const getAllPokemon = async () =>{  
     let pokeApi = await bundle()
     let pokeDb = await pokemonsDb()
     return [...pokeApi , ...pokeDb]
}

const getPokemonId = (param) =>{
      if (param[0] === 'U'){
         return pokemonDbPk(param)
      }
      return pokeDetail(param)
}

const getPokemonQuery = async (query) => {
      let res = await Pokemon.findOne({where: {name: query}})
      if(res === null) {return pokeDetail(query)}
      return pokemonDbPk(res.dataValues.id)
}

const getTypes = () => {
       return getTypesDb()  
}


module.exports = {
    getAllPokemon,
    getPokemonId,
    getPokemonQuery,
    getTypes
}
