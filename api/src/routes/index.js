const { Router } = require('express');
const { Pokemon } = require('../db');
const models = require('./models')

const router = Router();

module.exports = router;

const {
    getAllPokemon,
    getPokemonId,
    getPokemonQuery,
    getTypes
} = models

router

.get('/home',async (req,res)=>{
    try {
    let a = await getAllPokemon()
    res.status(200).json(a)
    } catch {
        res.status(404).json("There was a problem with the server")
    }

})

.get('/pokemon/:id',async (req,res)=>{
    const {id} = req.params
    try {
       const a = await getPokemonId(id)
       res.status(200).json(a)
    } catch {
        res.status(404).json("There was a problem with the data")
    }
})

.get('/pokemon', async (req,res)=>{
    const name = req.query.name
    try {
    const a = await getPokemonQuery(name)
    res.status(200).json(a)
    } catch {
        res.status(404).json("Pokemon not found or doesn't exist")
    }
})

.get('/types', async (req,res)=>{
    const a = await getTypes()
    res.status(200).json(a)
})

.post('/pokemon', async (req,res) => {
    const {id , name , height , weight , hp , attack , defense, speed, types, img} = req.body

    let typesDb = []
    let ready = []
    
    for(let i=0;i<=types.length-1;i++){
        if(types[i] === ',') {}
        else if(types[i+1] !== ',' && types[i+1]) {typesDb.push(types[i] + types[i+1]); i++}
        else {typesDb.push(types[i])}
    }
    typesDb.forEach(el => {if(el<21){ready.push(el)}})

    try {
        const newPokemon = await Pokemon.create({
            id,
            name,
            height,
            weight,
            hp,
            attack,
            defense,
            speed,
            img
        })
        newPokemon.setTypes(ready)
        res.status(201).json(newPokemon)
    } catch(error) {
        res.status(400).json({error :"There was a problem with the data"})
    }
})
