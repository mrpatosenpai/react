import React from "react";

export default class Formulario extends React.Component{
    state={}
    handleSummit=e=>{
        this.setState({[e.target.name]:e.target.value})
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSummit}>
                    <input
                    type="text"
                    placeholder="Nombre"
                    name= "nombre"
                    onChange={this.handleChange}
                    value={this.state.nombre}
                    />
                    <button
                    type="submit">
                        Enviar
                    </button>
                </form>
            </div>
        )
    }
}