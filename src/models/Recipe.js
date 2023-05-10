const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Recipe",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      summary: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      health_score: {
        type: DataTypes.INTEGER,
      },
      steps: {
        type: DataTypes.TEXT,
      },
      img: {
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: false,
    }
  );
};
