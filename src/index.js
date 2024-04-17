import React from 'react';
import ReactDOM from 'react-dom';
 
const nombre = "Juan"

const element= <h1>Hola, {nombre}</h1>;

const contenedor = document.getElementById('root')

ReactDOM.render(element,contenedor)