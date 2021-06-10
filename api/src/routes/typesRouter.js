const { Router } = require('express');
//const axios = require('axios').default;
const { Tipo } = require('../db.js');

const router = Router();

router.get('/', async (req, res) => {
/*     var resultado = await axios.get('https://pokeapi.co/api/v2/type')
    var types = resultado.data.results;
        
    types.map( type => Tipo.create({
        nombre: type.name
    })); */

    types = await Tipo.findAll();
    
    types = types.map( type => type.nombre);

    return res.json(types);
})


module.exports = router;