import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Barra from "./componentes/Barra/Barra";
import Recetas from "./componentes/Recetas/Recetas";
import Inicio from "./componentes/Inicio/inicio";
import CrearReceta from "./componentes/CrearReceta/CrearReceta";
import React from "react";
import Detalles from "./componentes/Detalles/Detalles";
import Nuevo from "./componentes/Nuevo/Nuevo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Nuevo}></Route>
        <Route exact path="/recetas" component={Recetas}></Route>
        <Route exact path="/crear-receta" component={CrearReceta}></Route>
        <Route exact path="/recetas/:id" component={Detalles}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
