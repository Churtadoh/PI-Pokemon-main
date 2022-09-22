const { Router } = require('express');
const models = require('./models')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;

const {
    getAllPokemon
} = models

router

.get('/home',(req,res)=>{
    res.status(200).json(getAllPokemon())
})
