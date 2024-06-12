import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Maestro from "./pages/maestro"
import Formulario from "./Formulario"
import Wenas from "./pages/wenas";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Maestro" element={<Maestro />} />
        <Route path="/Formulario" element={<Formulario />} />
        <Route path="/Wenas" element={<Wenas />} />
      </Routes>
    </BrowserRouter>
  );
}
