import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContenedorComponentes from "./pages/ContenedorComponentes";
import Formulario from "./Formulario";
import Nofound from "./pages/nofound";
import Navegar from "./Navegar";

export default function App() {
  
    
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Nofound />} />
        <Route path="/" element={<ContenedorComponentes />} />
        <Route path="/Formulario" element={<Formulario />} />
        <Route path="/Contenedor" element={<Navegar />} />
      </Routes>
    </BrowserRouter>
  );
}