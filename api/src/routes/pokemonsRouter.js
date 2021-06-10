const { Router } = require('express');
const axios = require('axios').default;
const { Pokemon, Tipo, pokemon_tipo } = require('../db.js');
const { conn } = require('../db.js');

const router = Router();

router.get('/', async (req, res) => {
    var name = req.query.name;
    
    if(name === undefined) { // en el caso de NO haberle pasado ningun query (name)
        let pokemons = [];
        for(let i = 1; i < 41 ; i++) {
            var resultado = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
            data = resultado.data;
            var type = data.types.map( type => type.type.name);
           
            pokemons.push({
                name: data.name,
                image: data.sprites.other.dream_world.front_default,
                types: type
            });
        }

        var prueba = await Pokemon.findAll({include: [Tipo]})
        
        prueba = prueba.map( datos => {
            var pokemon = {
                name: datos.nombre,
                image: 'imagen.jpg',
                types: datos.tipos.map( tipo => tipo.nombre)
            }

            return pokemons.push(pokemon);
        })
        
        return res.json(pokemons);

    } else { // en el caso de haberle pasado un query (name)
        try{
            var resultado = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            var data = resultado.data;

            var pokemonObj = {
                image: data.sprites.other.dream_world.front_default,
                name: data.name,
                tipos: data.types.map( type => type.type.name),
                id: data.id,
                life: data.stats[0].base_stat,
                strength: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
                speed: data.stats[5].base_stat,
                height: data.height,
                weight: data.weight
            };
            
            return res.json(pokemonObj);
        }
        catch(error){            
            var poke = await Pokemon.findOne({where: {nombre: name}});            
            if(poke === null) {
                return res.status(404).send('<h1>Pokemon no encontrado</h1>');
            } else {
                return res.json(poke);
            }
        }
    }
});
    

router.get('/:id', async (req, res) => {
    let id = req.params.id;
    
    try{    
        var resultado = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        var data = resultado.data;

        var pokemonObj = {
            image: data.sprites.other.dream_world.front_default,
            name: data.name,
            tipos: data.types.map( type => type.type.name),
            id: data.id,
            life: data.stats[0].base_stat,
            strength: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            speed: data.stats[5].base_stat,
            height: data.height,
            weight: data.weight
        };
        return res.json(pokemonObj);

    } catch (error) {
        if(id < 2147483647) {
            var poke = await Pokemon.findOne({where: { id: id } });
          
            if(poke === null) {
                return res.status(404).send('<h1>Pokemon no encontradooooo</h1>');
            } else {
                res.json(poke);
            }
        } else {
            return res.status(404).send('<h1>Numero demasiado grande</h1>');
        }        
        
    }
});

var idPokemon = 1000000

router.post('/', async (req, res) => {
    var pokemon = await Pokemon.create({
        id: idPokemon++,
        nombre: req.body.name,
        vida: req.body.life,
        fuerza: req.body.strength,
        defensa: req.body.defense,
        velocidad: req.body.speed,
        altura: req.body.heigth
    })
    
    // Busco el tipo en la tabla "Tipo" y relaciono ambos registros colocandolos en la tabla intermedia
    conn.sync({ alter: true }).then( async () => {  
        for(let i = 0; i < req.body.types.length ; i++) {
            var tipo = await Tipo.findOne({where: { nombre: req.body.types[i] }});
            await pokemon.addTipo(tipo);
        }
        
    });
    
    return res.send('<h1>Pokemon creado con éxito!</h1>');
    
    }
);


module.exports = router;