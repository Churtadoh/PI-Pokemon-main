const { Router } = require('express');
const models = require('./models')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;

const {
    getAllPokemon,
    getPokemonId
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
