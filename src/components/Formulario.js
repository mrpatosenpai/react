import React from "react";

export default class Formulario extends React.Component{

    render(){
        const {onChange,form,onSubmit} = this.props
        return(
            <React.Fragment>
                <form onSubmit={onSubmit}>
                    <div>
                        <label>Nombre:</label>
                        <input type="text" name="nombre" placeholder="Nombre aqui!!" onChange={onChange} value={form.nombre}/>
                    </div>
                    <div>
                        <label>Descripcion:</label>
                        <input type="text" name="descripcion" placeholder="Descipcion aqui!!" onChange={onChange} value={form.descripcion}/>
                    </div>
                    <div>
                        <label>Url de la imagen:</label>
                        <input type="text" name="img" placeholder="Imagen aqui!!" onChange={onChange} value={form.img}/>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </React.Fragment>
        )
    }
}