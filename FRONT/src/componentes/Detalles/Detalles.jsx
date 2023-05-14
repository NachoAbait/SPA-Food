import React, { useEffect, useState , useRef} from "react"
import { useSelector, useDispatch } from "react-redux";
import { getDetalle } from "../../ACTIONS";
import css from "./Detalles.module.css"
import { Link } from "react-router-dom";
import Barra from "../Barra/Barra"
import Footer from "../Footer/Footer"
import { resetDetalle } from "../../ACTIONS";

export default function Detalles(props) {
    console.log("Props:" + props)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(resetDetalle())
    },[dispatch])

    useEffect(() => {
        dispatch(getDetalle(props.match.params.id))
    },[dispatch])


    const elDetalle = useSelector((state) => state.detalle)
    console.log(elDetalle)

    /*-------------------------------------------------------*/


    return (

        
        <div className={css.div}>
            <Barra></Barra>
            { elDetalle.img ?  <div className={css.detalle}>
                
                <div className={css.containerImg}>
                    <img src={elDetalle.img} />
                </div>
                
                <div className={css.containerDer} >
                    <div className={css.containerNombre} >
                        <h1 className={css.nombre}>{elDetalle.nombre}</h1>
                    </div>
                    <div className={css.containerSubtitulo}>
                        { elDetalle.tipoDePlato? <h2><span className={css.h2}>Tipo de plato: </span> {elDetalle.tipoDePlato}</h2>: null}
                        
                    </div>
                    
                    <div className={css.containerSaludable}>
                        {elDetalle.saludable ? <h2><span className={css.h2}>Nivel saludable:</span> {elDetalle.saludable}</h2>: null}
                        
                    </div>
                    
                    <div className={css.containerDieta}>
                    {elDetalle.diets ?  <h2><span className={css.h2}>Dietas:  </span> {elDetalle.diets ? elDetalle.diets.map((i) => {
                            return i + ", "
                        }): null}</h2>: null}
                       
                    </div>
                    </div>
                <div className={css.containerResumen}>
                    <h2>{elDetalle.resumen?.replace(/<[^>]*>?/g, '')}</h2>
                </div>
                
                <div className={css.containerInstrucciones}>
                    <div className={css.divPasos}> {elDetalle.pasoApaso?.map(e => <div className={css.divPaso} > {<div clasName={css.cuadrado}>{<div className={css.spanNum}><p>{e.numero}</p></div>}</div>} {<div className={css.instruccion}>{e.instruccion}</div>}</div>)}</div>
                
                </div>
                

            </div>
: <iframe src="https://embed.lottiefiles.com/animation/143548"></iframe>}
           
            
        </div>
    )
    
}
 
 

 
