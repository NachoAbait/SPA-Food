
import SearchBar from "../SearchBar/SearchBar";
import Paginado from "../Paginado/Paginado";
import Tarjeta from "../Tarjeta/Tarjeta";
import css from "./Recetas.module.css"
import React, { useEffect, useState , useRef} from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRecipes , filterRecetaByDiet , filterByLocation, orderRecipeByName} from "../../ACTIONS"
import Barra from "../Barra/Barra"

export default function Recetas() {
  
  
  const dispatch = useDispatch()
  const allRecetas = useSelector((state) => state.recetas)

  const [paginaActual, setPaginaActual] = useState(1)
  const [recetasPorPagina, setRecetasPorPagina] = useState(9)
  const indiceUltimaReceta = paginaActual * recetasPorPagina
  const indicePrimerReceta = indiceUltimaReceta - recetasPorPagina
  const recetaActual = allRecetas.slice(indicePrimerReceta, indiceUltimaReceta)
  const [orden , setOrden] = useState(``)

  const paginado = (numeroPagina) => { 
    setPaginaActual(numeroPagina)
  }

  useEffect(() => { 
    dispatch(getRecipes());
  }, [])
  
  function handleClick(e) {
    e.preventDefault();
    dispatch(getRecipes())
  }
  
  function handleFilterDiet(e) {
    
    dispatch(filterRecetaByDiet(e.target.value))
    setPaginaActual(1)
  }

  function handleFilterLocation(e) {
    dispatch(filterByLocation(e.target.value))
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderRecipeByName(e.target.value));
    setPaginaActual(1);
    setOrden(`Ordenado ${e.target.value}`)
  }


  const recetasRef = useRef(null);

  useEffect(() => {
     recetasRef.current.classList.add(css.aparece);
   }, []);
 
    // acá va tu código
    return (
      <div className={css.div} >
        <Barra></Barra>
        <div className={css.menuSup} ref={recetasRef}>
          <br />
            <button clasName={css.btn} onClick={e => { handleClick(e) }}> Recargar recetas</button>
          <br />
          <br />
          <SearchBar ></SearchBar>
          <br />
          <div className={css.containerColumnas}>
            <div className={css.columna}>
              <label for="orden">Orden</label>
                <select onChange={e => handleSort(e)} id="orden">
                  <option value="">Elije una opcion</option>
                  <option value="asc">Ascendente</option>
                  <option value="desc">Descendente</option>
                  <option value="score">Health Score</option>
              </select>
            </div>
            
            &nbsp; &nbsp;
            <div className={css.columna}>
              <label for="dieta">Dieta</label>
                <select onChange={e => handleFilterDiet(e)} id="dieta">
                  <option value="">Elije una opcion</option>
                  <option value="gluten free">Gluten free</option>
                  <option value="dairy free">Dairy free</option>
                  <option value="paleolithic">Paleolithic</option>
                  <option value="lacto ovo vegetarian">Lacto-ovo-vegetarian</option>
                  <option value="primal">Primal</option>
                  <option value="whole 30">Whole 30</option>
                  <option value="vegan">Vegan</option>
                  <option value="ketogenic">Ketogenic</option>
                  <option value="pescatarian">Pescatarian</option>
                </select>
            </div>
            
            &nbsp; &nbsp;
            <div className={css.columna}>
              <label for="ubicacion">Ubicacion</label>
              <select onChange={e => handleFilterLocation(e)} id="ubicacion">
                <option value="">Elije una opcion</option>
                <option value="todos">Todos</option>
                <option value="L">Creados</option>
                <option value="A">Api</option>
              </select>
            </div>
            
            
            </div>
        </div>
          <Paginado recetasPorPagina={recetasPorPagina} allRecetas={allRecetas.length} paginado={paginado} />

          <div className={css.tarjetas} ref={recetasRef}>
          {recetaActual.map(e => <Tarjeta saludable={e.saludable} imagen={e.img} nombre={e.nombre ? e.nombre : e.name} dieta={e.dieta? e.dieta : e.Diet_Types.map(e=> e.name)} id={e.id} key={e.id}/>)}
          </div>
            
        </div>
      
    )
      
};