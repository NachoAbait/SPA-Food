import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipeByName } from "../../ACTIONS";
import css from "../SearchBar/SearchBar.module.css"


export default function SearchBar({ onSearch }) {

  const dispatch = useDispatch()
  const [nombreReceta, setNombre] = useState("")

  

  function handleInputChange(e) {
    e.preventDefault();
    setNombre(e.target.value);
    console.log(nombreReceta)
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getRecipeByName(nombreReceta))
    setNombre("")
  }

  // acá va tu código
  return (
    <div>
      <input className={css.input} type="text" placeholder="Receta..." value={nombreReceta} onChange={(e) => handleInputChange(e)} />
      &nbsp;
      <button className={css.btn} onClick={(e) => handleSubmit(e)}> Buscar </button>  
    </div>
  )
    
};