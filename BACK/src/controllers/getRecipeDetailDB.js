require("dotenv").config();
const { Recipe, Diet_Types } = require("../db.js");

module.exports = async function (id) {
  let response = await Recipe.findByPk(id, {
    include: {
      model: Diet_Types,
      attributes: ["name"],
      through: { attributes: [] },
    },
  });

  return {
  id: response.id,
  nombre: response.name,
  img: response.img,
  saludable: response.health_score,
  dieta: response.Diet_Types.map((e) => e.name)
} 
};

