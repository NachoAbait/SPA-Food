require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;

module.exports = async function (name) {
  if (name) {
    try {
      console.log("Axios: Pidiendo la receta a la API");
      const response = (
        await axios.get(
          `https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`
        )
      ).data.results.filter((e) =>
        e.title.toLowerCase().includes(name.toLowerCase())
      );
      console.log("Axios: Receta recibida");

      return response.map((e) => {
        return {
          id: "A" + e.id,
          nombre: e.title,
          img: e.image,
          dieta: e.diets,
          saludable: e.healthScore,
        };
      });
    } catch (error) {
      return { msg: `No encontramos ninguna receta "${name}" en la API` };
    }
  } else {
    try {
      console.log("Axios: Pidiendo la receta a la API");
      const response = (
        await axios.get(
          `https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`
        )
      ).data.results;
      console.log("Axios: Receta recibida");

      return response.map((e) => {
        return {
          id: "A" + e.id,
          nombre: e.title,
          img: e.image,
          dieta: e.diets,
          saludable: e.healthScore,
        };
      });
    } catch (error) {
      return { msg: `No encontramos ninguna receta en la API` };
    }
  }
};
