import React from "react";
import Card from "../Card";
import Hola from "../saludo";
import imagen from "../images/genshin-impact-arlecchino.jpg"
import imagen2 from "../images/furina-genshin-impact.png"
import Iteracion from "../itinerante";

export default class Maestro extends React.Component{
    state={
        data:[{
            id:1,
            "nombre":"Arlecchino",
            "descripcion":"Se caracteriza por su firmeza y frialdad",
            "img":imagen
        },{
            id:2,
            "nombre":"Furina",
            "descripcion":"Se caracteriza por ser elegante e inocente",
            "img":imagen2
        }]
    }
    render(){
        return(
            <div>
                <Hola
                username="Juan"
                />
                <Iteracion
                chao = {this.state.data}
                />
            </div>
        )
    }
}