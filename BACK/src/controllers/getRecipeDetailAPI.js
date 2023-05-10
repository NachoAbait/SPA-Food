require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;

module.exports = async function (id) {
  if (id) {
    try {
      console.log("AXIOS: Buscando los detalles de la receta");
      const resultado = (
        await axios.get(
          `https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`
        )
      ).data.results.filter((e) => e.id == id)[0];
      console.log("AXIOS: Detalles de la receta recibidos");

      return {
        img: resultado.image,
        nombre: resultado.title,
        tipoDePlato: resultado.dishTypes,
        resumen: resultado.summary,
        saludable: resultado.healthScore,
        diets: resultado.diets,
        pasoApaso: resultado.analyzedInstructions[0].steps.map((e) => {
          return {
            numero: e.number,
            instruccion: e.step,
          };
        }),
      };
    } catch (error) {
      return { msg: `No encontramos ninguna receta con el id ${id}` };
    }
  } else {
    return { msg: `No hemos recibido ningun id` };
  }
};
