const { Router } = require("express");
const router = Router();
const { getDiets } = require("../controllers/index.js");

router.get("/", async (req, res) => {
    
    const results = await getDiets();
  
    let code = results.msg ? 400 : 200;
    res.status(code).json(results);
  });

module.exports = router;
