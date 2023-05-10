import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetalle } from "../../ACTIONS";
import css from "./Detalles.module.css"
import { Link } from "react-router-dom";

export default function Detalles(props) {
    console.log("Props:" + props)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetalle(props.match.params.id))
    },[dispatch])


    const elDetalle = useSelector((state) => state.detalle)
    console.log(elDetalle)

    return (

        
        <div className={css.div}>
           
            <div className={css.detalle}>
                <h1 className={css.nombre}>{elDetalle.nombre}</h1>

                <img src={elDetalle.img} />

                <div className={css.subtitulo}>
                    <h2><span className={css.h2}>Tipo de plato: </span>{elDetalle.tipoDePlato}</h2>
                </div>
                
                <div>
                    <h2><span className={css.h2}>Nivel de "comida saludable":</span> {elDetalle.saludable} </h2>
                </div>
                
                <div>
                    <h2><span className={css.h2}>Dieta:</span> {elDetalle.diets? elDetalle.diets : elDetalle.dieta }</h2>
                </div>
                
                <div>
                    <h2><span className={css.h2}>Resumen:</span> {elDetalle.resumen?.replace(/<[^>]*>?/g, '')}</h2>
                </div>
                
                <div>
                    <h2><span className={css.h2}>Instrucciones:</span> {elDetalle.pasoApaso?.map(e => <div> <span className={css.span}>Paso n°{e.numero}:</span> <p>{e.instruccion}</p> <hr/></div>)}</h2>
                
                </div>
                
                
                 
               
                
            </div>
        </div>
    )
    
}
