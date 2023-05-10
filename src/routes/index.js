const { Router } = require("express");
// Importar todos los routers;

//IMPORTAMOS LAS RUTAS
const getRecipe = require("./GetRecipes");
const getRecipeDetail = require("./GetRecipesId");
const getDiets = require("./GetDiets");
const postRecipe = require("./PostRecipe");

const router = Router();

// Configurar los routers
// ACLARAMOS LOS PATH PARA CADA RUTA
router.use("/recipes", getRecipe);
router.use("/recipes", getRecipeDetail);
router.use("/recipes", postRecipe);
router.use("/diets", getDiets);

module.exports = router;
