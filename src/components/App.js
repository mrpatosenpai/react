import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Maestro from "./pages/maestro"
import Formulario from "./Formulario"
/* import Wenas from "./pages/wenas"; */
import Nofound from "./pages/nofound"
import Navegar from "./Navegar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Nofound/>} />
        <Route path="/Maestro" element={<Maestro />} />
        <Route path="/Formulario" element={<Formulario />} />
        <Route path="/Wenas" Component={Navegar} />
      </Routes>
    </BrowserRouter>
  );
}
