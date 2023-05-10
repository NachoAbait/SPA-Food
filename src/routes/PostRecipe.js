const { Router } = require("express");
const router = Router();
const { postRecipe } = require("../controllers/index.js");

router.post("/", async (req, res) => {
  //OBTENEMOS LOS DATOS X QUERY
    
  const { nombre, resumen, saludable, pasos, img, dietas } = req.body;

    console.log(nombre, resumen, saludable)
    
  const results = await postRecipe(nombre, resumen, saludable, pasos, img, dietas);

  let code = results.id ? 200 : 400;
  res.status(code).json(results);
});

module.exports = router;
