import React from "react";
import Hola from "../saludo";
import Iterador from "../itinerante";
import Boton from "../Boton";

export default class Maestro extends React.Component{
    state={
        data:[

        ]
    }
    async componentDidMount(){
        await this.cargarComponentes()
    }
    cargarComponentes=async()=>{
        let res=await fetch('http://localhost:8000/api/info')
        let data = await res.json()
        this.setState({
            data
        })
    }
    render(){
        console.log(this.state.data);
        return(
            
            <div>
                <Hola
                username="Juan"
                />
                <Iterador
                chao = {this.state.data}
                />
                <Boton/>
            </div>
            
        )
    }
}