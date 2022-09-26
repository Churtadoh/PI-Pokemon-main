const { Router } = require('express');
const { Pokemon } = require('../db');
const models = require('./models')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;

const {
    getAllPokemon,
    getPokemonId,
    getPokemonQuery,
    getTypes
} = models

router

.get('/home', (req,res)=>{
    res.status(200).json(getAllPokemon())
})

.get('/pokemon/:id',async (req,res)=>{
    const {id} = req.params
    const a = await getPokemonId(id)
    res.status(200).json(a)
})

.get('/pokemon', async (req,res)=>{
    const name = req.query.name
    const a = await getPokemonQuery(name)
    res.status(200).json(a)
})

.get('/types', async (req,res)=>{
    const a = await getTypes()
    res.status(200).json(a)
})

.post('/pokemon', async (req,res) => {
    const {id , name , height , weight , hp , attack , defense, speed} = req.body

    try {
        const newPokemon = await Pokemon.create({
            id,
            name,
            height,
            weight,
            hp,
            attack,
            defense,
            speed
        })
        res.status(201).json(newPokemon)
    } catch(error) {
        res.status(404).send("There was a problem with the data")
    }
})
