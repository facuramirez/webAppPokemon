const { Router } = require('express');
const axios = require('axios').default;
const { Pokemon, Tipo, pokemon_tipo } = require('../db.js');
const { conn } = require('../db.js');
const router = Router();

router.get('/', async (req, res) => {
    var name = req.query.name;
    
    if(name === undefined) { // en el caso de NO haberle pasado ningun query (name)
       
        let pokemons = [];

        var data1 = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
        var results1 = data1.data.results;

        var data2 = await axios.get(data1.data.next);
        var results2 = data2.data.results;

        var pokeUrl = [...results1, ...results2];
        pokeUrl = pokeUrl.map( pokemon => pokemon.url);
        
        
        var pokeResponses = await Promise.all(pokeUrl.map( pokemon => axios.get(pokemon)));
        var data = await Promise.all(pokeResponses.map( response => {
            var type = response.data.types.map( type => type.type.name);
           
            pokemons.push({
                name: response.data.name,
                image: (response.data.sprites.other.dream_world.front_default === null) ?
                        response.data.sprites.other['official-artwork'].front_default
                        :
                        response.data.sprites.other.dream_world.front_default,
                strength: response.data.stats[1].base_stat,
                weight: response.data.weight,
                height: response.data.height,
                types: type
            });
        }));

        
        var pokeDB = await Pokemon.findAll({include: [Tipo]})
        
        pokeDB = pokeDB.map( datos => {
            var pokemon = {
                name: datos.nombre,
                image: 'https://w7.pngwing.com/pngs/248/960/png-transparent-pikachu-pokemon-go-silhouette-drawing-pikachu-dog-like-mammal-fictional-character-black.png',
                strength: datos.fuerza,
                weight: datos.peso,
                height: datos.altura,
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
                image: (data.sprites.other.dream_world.front_default === null) ?
                        data.sprites.other['official-artwork'].front_default
                        :
                        data.sprites.other.dream_world.front_default,
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
            image: (data.sprites.other.dream_world.front_default === null) ?
                        data.sprites.other['official-artwork'].front_default
                        :
                        data.sprites.other.dream_world.front_default,
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
        altura: req.body.heigth,
        peso: req.body.weight
    })
    
    // Busco el tipo en la tabla "Tipo" y relaciono ambos registros colocandolos en la tabla intermedia
    
    var types = await Tipo.findAll({ where: { nombre: req.body.types } })
    await pokemon.addTipo(types);
       
    return res.send('<h1>Pokemon creado con ??xito!</h1>');
        

    }
);


module.exports = router;