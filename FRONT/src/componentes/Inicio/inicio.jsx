import React, { useEffect, useState , useRef} from "react"
import css from "./Inicio.module.css"
import { Link } from "react-router-dom"

export default function Inicio() {
    
    const extraRef = useRef(null);

    useEffect(() => {
      const altura = window.innerHeight / 1.3;
  
      function handleScroll() {
        const distancia = extraRef.current.getBoundingClientRect().top;
  
        if (distancia <= altura) {
          extraRef.current.classList.add(css.aparece);
        } else {
          extraRef.current.classList.remove(css.aparece);
        }
      }
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    // acá va tu código
    return (
        <div className={css.div}>
            <div className={css.containerr}>
                <div className={css.inicioIzq}>
                <div className={css.izq1}>
                    <h1>Cambiando tus <span>hábitos</span> de comer</h1>
                </div>
                <div className={css.izq2}>
                    <p>Comer sanamente ahora es mas facil con FoodBox. Accede a miles de recetas con un solo click.</p>
                </div>
                <div className={css.izq3}>
                    <Link to="/recetas">
                        <button>Mira las recetas</button>
                    </Link>
                    
                </div>
                <div className={css.izq4}>
                    <div className={css.dato1}>
                        <div className={css.tituloDato}>
                            <h1>+500</h1>
                        </div>
                        <div className={css.dato} > 
                            <p>Recetas</p>
                        </div>
                    </div>
                    <div className={css.dato2}>
                    <div className={css.tituloDato}>
                            <h1>+10</h1>
                        </div>
                        <div className={css.dato} > 
                            <p>Tipos de dietas</p>
                        </div>
                    </div>
                    <div className={css.dato3}>
                    <div className={css.tituloDato}>
                            <h1>+2600</h1>
                        </div>
                        <div className={css.dato} > 
                            <p>Ingredientes</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.inicioDer}>
                <iframe className={css.animacion} src="https://embed.lottiefiles.com/animation/110285"></iframe>
            </div>
            </div>
            
            <div className={css.containerExtra} ref={extraRef}>
                <div className={css.extra1}>
                    <div className={css.tituloDato}>
                        <h1>Hacerse mas saludable</h1>
                    </div>
                    <div className={css.dato} > 
                        <p>La inmunidad será más fuerte si el cuerpo está más saludable</p>
                    </div>
                    <div className={css.imgExtra}>
                    <img className={ css.foto2} src="https://media.istockphoto.com/id/1205256331/es/vector/m%C3%A9dico-o-concepto-de-servicio-m%C3%A9dico-concepto-para-aplicaciones-m%C3%A9dicas-y-sitios-web.jpg?s=612x612&w=0&k=20&c=z3Kiy5HX4KMbwSkdiq2JjGZHzWDDsQzGm90334CLsxA=" alt="" />

                    </div>
                </div>

                <div className={css.extra2}>
                <div className={css.tituloDato}>
                        <h1>Ahorre tiempo</h1>
                    </div>
                    <div className={css.dato} > 
                        <p>El tiempo ya no será excusa para no estar sano</p>
                    </div>
                    <div className={css.imgExtra2}>
                        <img className={ css.foto2} src="https://us.123rf.com/450wm/chekman/chekman1707/chekman170700029/82823340-icono-de-reloj-con-flechas-en-dise%C3%B1o-plano-ilustraci%C3%B3n-del-vector-icono-de-reloj-azul-con-sombra.jpg" alt="" />
                    </div>
                </div>

                <div className={css.extra3}>
                <div className={css.tituloDato}>
                        <h1>Aumente la energia</h1>
                    </div>
                    <div className={css.dato} > 
                        <p>Tener suficiente energía puede ayudarte a alcanzar una meta</p>
                    </div>
                    <div className={css.imgExtra3}>
                        <img className={ css.foto2} src="https://media.istockphoto.com/id/1189237606/vector/arm-icon-silhouette.jpg?s=612x612&w=0&k=20&c=h789txMWhiARrWQgwg9SctC4IgJLQY2ayEAe3uVpdds=" alt="" />
                    </div>
                </div>

            </div>
        </div>
    
    )
      
};