import React from "react";
import Hola from "./saludo";
import Iterador from "./itinerante";
import Boton from "./Boton";

const RenderMaestro = ({ data }) => (
  <React.Fragment>
    <Hola username="Juan" />
    <Iterador chao={data} />
    <Boton />
  </React.Fragment>
);

export default RenderMaestro;