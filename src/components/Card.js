import React from "react";
import "./css/style.css"

class Card extends React.Component{
    render(){
        const{nombre,descripcion,img} = this.props
        return(
            <div className="card">
                <h1>{nombre}</h1>
                <p>{descripcion}</p>
                <img src={img} className="porta" alt=""/>

            </div>
        )
    }
}

export default Card