import React from "react";
import css from "../Paginado/Paginado.module.css"

export default function Paginado({recetasPorPagina, allRecetas, paginado}) {
    const numeroPagina = [];

    for (let i = 0; i<= Math.ceil(allRecetas/recetasPorPagina)-1; i++) {
        numeroPagina.push(i + 1)
    }

    return (
        <nav className={css.paginado}>
            <ul className={ css.numeros}>
                {numeroPagina && numeroPagina.map(numero => (
                    <li key={numero} className={css.numero}>
                        <a onClick={() => paginado(numero)}> {numero}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
        
    
}