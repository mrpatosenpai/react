import React from "react";
import Contenedor from "./pages/Contenedor";
import { useNavigate } from "react-router-dom";

const Navegar = () => {
  const navigate = useNavigate();
  return <Contenedor navigate={navigate} />;
}

export default Navegar;