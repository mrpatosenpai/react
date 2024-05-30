import React from "react";
import "./css/style.css"

function Hola(props){
    return(
        <div>
            <h1 className="titulo">
                Bienvenido: {props.username}
            </h1>
        </div>
    )
}

export default Hola