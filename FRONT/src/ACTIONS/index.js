import axios from "axios";

export function getRecipes() {
  return async function (dispatch) {
    var json = await axios.get("/recipes");
    console.log(json.data);
    return dispatch({
      type: "GET_RECIPES",
      payload: json.data,
    });
  };
}

export function filterRecetaByDiet(payload) {
  console.log(payload);
  return {
    type: "FILTER_BY_DIET",
    payload,
  };
}

export function filterByLocation(payload) {
  console.log(payload);
  return {
    type: "FILTER_BY_LOCATION",
    payload,
  };
}

export function orderRecipeByName(payload) {
  console.log(payload);
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function getRecipeByName(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`/recipes?name=${name}`);
      return dispatch({
        type: "GET_RECIPE_BY_NAME",
        payload: json.data,
      });
    } catch (error) {
      return { msg: error };
    }
  };
}

export function postRecipe(payload) {
  return async function (dispatch) {
    const post = await axios.post("/recipes", payload);
    console.log(post);
    return post;
  };
}

export function getDiets() {
  return async function (dispatch) {
    try {
      var info = await axios.get("/diets");
      return dispatch({
        type: "GET_DIETS",
        payload: info.data,
      });
    } catch (error) {
      return { msg: error };
    }
  };
}

export function getDetalle(id) {
  return async function (dispatch) {
    try {
      var detalle = await axios.get(`/recipes/${id}`);
      return dispatch({
        type: "GET_DETALLE",
        payload: detalle.data,
      });
    } catch (error) {
      return { msg: error };
    }
  };
}

export function resetDetalle() {
  return async function (dispatch) {
    try {
      return dispatch({
        type: "RESET_DETALLE",
        payload: "",
      });
    } catch (error) {
      return { msg: error };
    }
  };
}
