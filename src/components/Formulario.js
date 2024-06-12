import React from "react";

export default class Formulario extends React.Component {
    state = {
        Formulario: {
            nombre: "",
            descripcion: "",
            img: ""
        }
    };

    handleSummit = e => {
        this.setState({
            Formulario: {
                ...this.state.Formulario,
                [e.target.name]: e.target.value
            }
        });
    };

    render() {
        const {onSubmit } = this.props;
        const { Formulario } = this.state;
        return (
            <div>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        placeholder="Nombre"
                        name="nombre"
                        onChange={this.handleSummit}
                        value={Formulario.nombre}
                    />
                    <input
                        type="text"
                        placeholder="Descripcion"
                        name="descripcion"
                        onChange={this.handleSummit}
                        value={Formulario.descripcion}
                    />
                    <input
                        type="text"
                        placeholder="url"
                        name="img"
                        onChange={this.handleSummit}
                        value={Formulario.img}
                    />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        );
    }
}