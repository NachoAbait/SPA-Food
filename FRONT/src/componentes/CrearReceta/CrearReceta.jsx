import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets, postRecipe } from "../../ACTIONS";
import css from "./CrearReceta.module.css"
import { validate } from "./validador";


export default function CrearReceta() {
    
    const dispatch = useDispatch()
    const diets = useSelector((state) => state.diets) 

    // ESTADO LOCAL PARA LOS ERRORES
    const [errors, setErrors] = useState({});

    // CREAMOS UN ESTADO LOCAL
    const [input, setInput] = useState({
        nombre: "",
        resumen: "",
        img: "", 
        saludable: "",
        pasos: "",
        dietas: []
    })

    useEffect(() => {
        dispatch(getDiets());
    },[])

    // LLENA LOS VALORES DEL INPUT MENOS LAS DIETAS
    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })

        setErrors(
            validate({
              ...input,
              [e.target.name]: e.target.value,
            })
          );
    }

    // LLENA LOS VALORES DE DIETAS EN EL INPUT
    function handleSelect(e) {
        setInput({
            ...input,
            dietas: Array.from(new Set([...input.dietas, e.target.value])) // de array a set y de set a array
        })
    }

    // FUNCION AL ENVIAR EL FORMULARIO
    function handleSubmit(e) {
        e.preventDefault();
        console.log(input);

        if (Object.values(errors).length > 0) {
            alert("Por favor completa la informacion requerida!")
        } else if (
            input.nombre === "",
            input.resumen === "",
            input.img === "", 
            input.saludable === 0,
            input.pasos === ""
        ) {
            alert("Por favor completa todos los campos!")
        } else {
            //CREAMOS LA RECETA
            dispatch(postRecipe(input));
            alert("Receta creada!! :) ");
            // RESETEAMOS EL ESTADO 
            setInput({
            nombre: "",
            resumen: "",
            img: "", 
            saludable: 0,
            pasos: "",
            dietas: []
            //RESETEAMOS EL ERROR ?

        })
        }
            
        
    }
    

    // acá va tu código
    return (
        <div className={css.div}>
            <div className={ css.form}>
                <h1 className={ css.titulo}>CREA TU RECETA! </h1>
                <hr />
                <br />
            <form onSubmit={(e) => handleSubmit(e)}>
                    
                <div>
                    <label className={css.input}><b>Nombre:</b></label>
                    &nbsp;&nbsp;&nbsp;
                    <input type="text" value={input.nombre} name="nombre" onChange={(e) => handleChange(e)} />
                        {errors.nombre ?
                        (<h4><small>{errors.nombre}</small></h4>) :
                        (false)}
                </div>
                <br />

                <div>
                    <label className={css.input}><b>Resumen:</b></label>
                    &nbsp;&nbsp;&nbsp;
                    <input type="text" value={input.resumen} name="resumen" onChange={(e) => handleChange(e)} />
                    {errors.resumen ?
                    (<h4><small>{errors.resumen}</small></h4>) :
                    (false)}
                </div>
                <br />

                <div>
                    <label className={css.input}><b>Nivel de "comida saludable":</b></label>
                    &nbsp;&nbsp;&nbsp;
                    <input type="number" min="1" max="100" value={input.saludable} name="saludable" onChange={(e) => handleChange(e)} />
                    {errors.saludable ?
                    (<h4><small>{errors.saludable}</small></h4>) :
                    (false)}    
                </div>
                <br />

                <div>
                    <label className={css.input}><b>Paso a paso:</b></label>
                    &nbsp;&nbsp;&nbsp;
                    <input type="text" value={input.pasos} name="pasos" onChange={(e) => handleChange(e)} />
                    {errors.pasos ?
                    (<h4><small>{errors.pasos}</small></h4>) :
                    (false)}
                </div>
                <br />

                <div>
                    <label className={css.input}><b>Imagen:</b></label>
                    &nbsp;&nbsp;&nbsp;
                    <input type="text" value={input.img} name="img" onChange={(e) => handleChange(e)} />
                    {errors.img ?
                    (<h4><small>{errors.img}</small></h4>) :
                    (false)}    
                </div>
                <br />

                <label className={css.input}><b>Dietas:</b></label>
                    &nbsp;&nbsp;&nbsp;
                    
                <select onChange={(e) => handleSelect(e)}>
                    {diets.map((diet) => (
                        <option value={diet.name}> {diet.name}</option>
                    ))}
                </select>
                <ul><li>{input.dietas.map(e => e + " ,")}</li></ul>
                
                    <br />
                <button type="submit"> Crear receta </button>
            </form>
            </div>
            
        </div>
    
    )
      
};