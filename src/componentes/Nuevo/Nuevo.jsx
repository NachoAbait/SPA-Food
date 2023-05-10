import React from "react";
import css from "./Nuevo.module.css"
import Barra from "../Barra/Barra"
import Inicio from "../Inicio/inicio";
import Footer from "../Footer/Footer";

export default function Nuevo() {
    return (
        <div className={css.container}>
            <Barra></Barra> 
            <Inicio></Inicio>
            <Footer></Footer>
        </div>
    )
}