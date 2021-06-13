const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    /* ID: {
      type: DataTypes.INTEGER,
      allowNull: false
      //primaryKey: true
    }, */
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vida: {
      type: DataTypes.INTEGER
    },
    fuerza: {
      type: DataTypes.INTEGER
    },
    defensa: {
      type: DataTypes.INTEGER
    },
    velocidad: {
      type: DataTypes.INTEGER
    },
    altura: {
      type: DataTypes.DOUBLE   
    }

  });
  
};