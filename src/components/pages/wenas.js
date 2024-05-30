import React from "react";
import Formulario from "../Formulario";
import Card from "../Card";
export default class Wenas extends React.Component{
    state={
        form:{}
    }
    handleChange=e=>{
        this.setState({
            form:{[e.target.name]:e.target.value}
        })
    }
    render(){
        return (
            <div>
            <Card
            
            />
            <Formulario
            onChange={this.handleChange}
            from={this.state.form}
            />
            </div>

        )
    }
}