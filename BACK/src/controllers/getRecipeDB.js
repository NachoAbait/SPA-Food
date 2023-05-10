require("dotenv").config();
const { Recipe, Diet_Types } = require("../db.js");
const { Op } = require("sequelize");

module.exports = async function (name) {
  if (name) {
    let results = await Recipe.findAll({
      where: name
        ? {
            name: {
              [Op.iLike]: `%${name}%`,
            },
          }
        : {},
      attributes: ["name", "img", "health_score"],

      include: {
        model: Diet_Types,
        as: "Diet_Types",
        attributes: ["name"],
        through: { attributes: [] },
      },
    });
    return results.map((e) => {
      return {
        id: "L" + e.id,
        nombre: e.name,
        img: e.img,
        saludable: e.health_score,
        dieta: e.Diet_Types.map((e) => e.name),
      };
    });
  } else {
    let resultado = await Recipe.findAll({
      include: {
        model: Diet_Types,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });
    console.log("resultado:" + resultado);

    return resultado.map((e) => {
      return {
        id: "L" + e.id,
        nombre: e.name,
        img: e.img,
        saludable: e.health_score,
        dieta: e.Diet_Types.map((e) => e.name),
      };
    });
  }
};
