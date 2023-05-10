const { Router } = require("express");
const router = Router();
const { getRecipeDetail } = require("../controllers/index.js");

router.get("/:id", async (req, res) => {
  //OBTENEMOS EL ID X PARAMS
  const { id } = req.params;

  // BUSCAMOS LA RECETA EN LA API Y SINO ESTA, EN LA DB
  const results = await getRecipeDetail(id);

  let code = results.msg ? 400 : 200;
  res.status(code).json(results);
});

module.exports = router;
