// IMPORTAMOS LAS FUNCOINES DE LA API Y LA DB
const getRecipeAPI = require("./getRecipeAPI");
const getRecipeDB = require("./getRecipeDB");
const getRecipeDetailAPI = require("./getRecipeDetailAPI");
const getRecipeDetailDB = require("./getRecipeDetailDB");

// IMPORTAMOS LOS MODELOS
const { Recipe, Diet_Types } = require("../db");

module.exports = {
  getRecipeAPI,
  getRecipeDB,
  getRecipeDetailAPI,
  getRecipeDetailDB,

  getRecipes: async function (name) {
    // BUSCAMOS LA RECETA EN LA BASE DE DATOS
    console.log("Buscando receta en la DB");
    let results = await getRecipeDB(name);
    console.log("Receta recibida desde la DB");

    // LE AGREGAMOS LOS RESULTADOS ENCONTRADOS EN LA API
    console.log("Buscando receta en la API");
    results = results.concat(await getRecipeAPI(name));
    console.log("Receta recibida desde la API");

    if (name) {
      if (results.length === 0)
        return { msg: `No encontramos la receta llamada '${name}'.` };
    }

    return results;
  },

  getRecipeDetail: async function (id) {
    // PRIMERO VEMOS DONDE VAMOS A BUSCAR LA INFO, DB("L"id) O API("A"id)
    const local = id[0] === "L";

    // RETIRAMOS EL DISTINTIVO SEA "L" O "A" PARA LA BUSQUEDA
    const idNumber = Math.floor(id.slice(1) * 1);

    // RETORNAMOS UN MENSAJE DE ERROR SI EL ID ES INVALIDO
    if (isNaN(idNumber)) {
      return { msg: `El id ${id} es inválido.` };
    }

    //SI ESTA EN LA DB
    if (local) {
      console.log("Vamos a buscarlo en la DB");
      return await getRecipeDetailDB(idNumber);
    } else {
      // SI SE TRAE DE LA API
      console.log("Vamos a buscarlo en la API");
      return await getRecipeDetailAPI(idNumber);
      
    }
  },

  postRecipe: async function (nombre, resumen, saludable, pasos, img, dietas) {
    // SI RECIBIMOS NOMBRE, RESUMEN Y SALUDABLE TRATAMOS DE ALMACENARLO EN LA DB
    if (nombre && resumen && saludable) {
      const [submitted, created] = await Recipe.findOrCreate({
        where: { name: nombre },
        defaults: {
          summary: resumen,
          health_score: saludable,
          steps: pasos,
          img: img,
        },
      });

      let dietsDB = await Diet_Types.findAll({
        where: { name: dietas },
      });

      submitted.addDiet_Types(dietsDB);

      let msg = "";

      if (created) {
        msg = "La receta fue creada exitosamente.";
      } else {
        msg = "La receta ya existe.";
      }

      return {
        id: "L" + submitted.id, // IDENTIFICAMOS QUE SE AGREGA A LA DB
        created: created, // fue creado?
        msg, // detalle
      };
    } else {
      return {
        msg: "Back2Front: Revisa el formulario. Pueden faltar campos",
      };
    }
  },

  getDiets: async function () {
    // PRIMERO BUSCAMOS EN LA DB
    let DietList = await Diet_Types.findAll();

    // SI NO ESTAN EN LA DB. LOS AGREGAMOS
    if (!DietList.length) {
      await Diet_Types.bulkCreate([
        { name: "gluten free" },
        { name: "dairy free" },
        { name: "paleolithic" },
        { name: "lacto ovo vegetarian" },
        { name: "primal" },
        { name: "whole 30" },
        { name: "vegan" },
        { name: "ketogenic" },
        { name: "pescatarian" },
      ]);
      return await Diet_Types.findAll();
    }

    //RETORNAMOS LA LISTA DE DIETAS
    return DietList;
  },
};
