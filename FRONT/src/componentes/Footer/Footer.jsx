import React from "react";
import css from "./Footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { } from "@fortawesome/free-brands-svg-icons"
import { faHatCowboy, faUtensils} from "@fortawesome/free-solid-svg-icons"


export default function Footer() {
    return (
        <div className={css.container}>
            <div className={css.containerLogo}>
                <div className={css.icono}>
                    <FontAwesomeIcon className={css.gorro} icon={faUtensils} style={{ color: "#ffffff", }} />
                </div>
                <h2 className={css.logo}>
                    Food<span className={css.span}>Box</span>
                </h2>
            </div>
            <div className={css.grid}>
                <div className={css.col}>
                    WebSide hecha con ❤️ por <a target="blank" href="https://www.linkedin.com/in/nacho-abait-480073256/"> Nacho Abait</a>
                </div>
    
            </div>
        </div>
    )
}