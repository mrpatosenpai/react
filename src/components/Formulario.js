import React from "react";

export default class Formulario extends React.Component {
  render() {
    const { onChange, form, onSubmit } = this.props;
    return (
      <React.Fragment>
        <form onSubmit={onSubmit}>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre aquí!!"
              onChange={onChange}
              value={form.nombre}
            />
          </div>
          <div>
            <label>Descripción:</label>
            <input
              type="text"
              name="descripcion"
              placeholder="Descripción aquí!!"
              onChange={onChange}
              value={form.descripcion}
            />
          </div>
          <div>
            <label>URL de la imagen:</label>
            <input
              type="text"
              name="img"
              placeholder="Imagen aquí!!"
              onChange={onChange}
              value={form.img}
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </React.Fragment>
    );
  }
}