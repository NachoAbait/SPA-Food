const initialState = {
  recetas: [],
  todasRecetas: [],
  diets: [],
  detalle: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_RECIPES":
      return {
        ...state,
        recetas: action.payload,
        todasRecetas: action.payload,
      };

    case "FILTER_BY_DIET":
      const allRecipes = state.todasRecetas;
      console.log(allRecipes);
      const dietFiltradosDieta = allRecipes.filter((e) =>
        e.dieta.includes(action.payload)
      );
      console.log(dietFiltradosDieta);
      return {
        ...state,
        recetas: dietFiltradosDieta,
      };

    case "FILTER_BY_LOCATION":
      const allRecipes2 = state.todasRecetas;
      console.log(allRecipes2);
      const dietFiltradosLocation =
        action.payload === "todos"
          ? allRecipes2
          : allRecipes2.filter((e) => e.id.includes(action.payload));
      console.log(dietFiltradosLocation);
      return {
        ...state,
        recetas: dietFiltradosLocation,
      };

    case "ORDER_BY_NAME":
      let sortedArr = [];
      if (action.payload === "asc") {
        sortedArr = state.recetas.sort(function (a, b) {
          if (a.nombre > b.nombre) {
            return 1;
          }
          if (b.nombre > a.nombre) {
            return -1;
          }
          return 0;
        });
      } else if (action.payload === "desc") {
        sortedArr = state.recetas.sort(function (a, b) {
          if (a.nombre > b.nombre) {
            return -1;
          }
          if (b.nombre > a.nombre) {
            return 1;
          }
          return 0;
        });
      } else {
        sortedArr = state.recetas.sort(function (a, b) {
          if (a.saludable > b.saludable) {
            return -1;
          }
          if (b.saludable > a.saludable) {
            return 1;
          }
          return 0;
        });
      }
      return {
        ...state,
        recetas: sortedArr,
      };

    case "GET_RECIPE_BY_NAME":
      return {
        ...state,
        recetas: action.payload,
      };

    case "GET_DIETS":
      return {
        ...state,
        diets: action.payload,
      };

    case "POST_RECIPE":
      return {
        ...state,
      };

    case "GET_DETALLE":
      return {
        ...state,
        detalle: action.payload,
      };
    case "RESET_DETALLE":
      return {
        ...state,
        detalle: {}
      }

    default:
      return {
        ...state,
      };

    /*
      RECIBIMOS X PAYLOAD UN ID. Y CON ESE ID PODRIAMOS FILTRAR EL ESTADO RECETAS PARA RETORNAR UN {...STATE, RECETAS: ARRFILTRADO}
    */
  }
}

export default rootReducer;
