import React from "react";
import css from "../Barra/Barra.module.css"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { } from "@fortawesome/free-brands-svg-icons"
import { faHatCowboy, faUtensils} from "@fortawesome/free-solid-svg-icons"

export default function Barra () {
    // acá va tu código
    return (
      <div className={css.div}>
      
        <div className={css.containerLogo}>
          <div className={css.icono}>
            <FontAwesomeIcon className={css.gorro} icon={faUtensils} style={{ color: "#ffffff", }} />
          </div>
          <h2 className={css.logo}>
            Food<span className={css.span}>Box</span>
          </h2>
          
        </div>

        <div className={css.containerLista}>
          <ul>
              <li className={css.li}>
                <Link to="/">Inicio</Link>
              </li>
              <li className={css.li}>
                <Link to="/recetas">Recetas</Link>
              </li>
              <li className={css.li}>
              <Link to="/crear-receta">
                <button>
                <FontAwesomeIcon className={css.Mini} icon={faUtensils} style={{ color: "#ffffff", }} />
                    Crear
                </button>
                </Link>
              </li>
          </ul>
        </div>
        

      </div>
    )
      
};