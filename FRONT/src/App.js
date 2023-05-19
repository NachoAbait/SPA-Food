import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Barra from "./componentes/Barra/Barra";
import Recetas from "./componentes/Recetas/Recetas";
import Inicio from "./componentes/Inicio/inicio";
import CrearReceta from "./componentes/CrearReceta/CrearReceta";
import React from "react";
import Detalles from "./componentes/Detalles/Detalles";
import Nuevo from "./componentes/Nuevo/Nuevo";
import axios from "axios";

axios.defaults.baseURL = "https://spa-food-back-production.up.railway.app/";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Nuevo></Nuevo>}></Route>
          <Route exact path="/recetas" element={<Recetas></Recetas>}></Route>
          <Route
            exact
            path="/crear-receta"
            element={<CrearReceta></CrearReceta>}
          ></Route>
          <Route
            exact
            path="/recetas/:id"
            element={<Detalles></Detalles>}
          ></Route>
       </Routes>
          
       
      </div>
    </BrowserRouter>
  );
}

export default App;
