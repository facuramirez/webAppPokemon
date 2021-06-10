const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const authPokemons = require('./pokemonsRouter.js');
const authTypes = require('./typesRouter.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', authPokemons);
router.use('/types', authTypes);

module.exports = router;
