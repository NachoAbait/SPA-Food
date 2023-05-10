const { Router } = require("express");
const router = Router();
const { getRecipes } = require("../controllers/index.js");

router.get("/", async (req, res) => {
  //OBTENEMOS EL NOMBRE X QUERY
  const { name } = req.query || null;

  // BUSCAMOS LA RECETA EN LA DB Y EN LA API
  const results = await getRecipes(name);

  let code = results.msg ? 400 : 200;
  res.status(code).json(results);
});

module.exports = router;
