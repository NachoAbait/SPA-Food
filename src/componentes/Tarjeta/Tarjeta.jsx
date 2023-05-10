import React from "react";
import css from "./Tarjetas.module.css"
import { Link } from "react-router-dom"

export default function Tarjeta({ imagen, nombre , dieta, id, saludable}) {
    // acá va tu código
    return (
      <div className={css.card}>
        
        <div className={`${css.face} ${css.front}`}>
          <img className={ css.cardImg} src={`${imagen}`} alt="Fotito" />
          <h3 className={ css.title}>{ nombre}</h3>
        </div>
        
        <div className={`${css.face} ${css.back}`}>
          <h3 className={ css.title}>{ nombre}</h3>
          <p className={css.dieta}> <span className={css.span}>Dietas:</span> {dieta + " "}</p>
          <p><span className={css.span}>Saludable:</span> {saludable}</p>
          <div className={css.link}>
            <Link to={ `/recetas/${id}`} >
              Detalles
            </Link>
            
          </div>
          
        </div>
        
        
      </div>
    )
      
};