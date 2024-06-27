import React from "react";

const Formulario =({onChange, form, onSubmit})=>(
  <React.Fragment>
        <form onSubmit={onSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Nombre:</label>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre aquí!!"
              onChange={onChange}
              value={form.nombre}
              style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Descripción:</label>
            <input
              type="text"
              name="descripcion"
              placeholder="Descripción aquí!!"
              onChange={onChange}
              value={form.descripcion}
              style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>URL de la imagen:</label>
            <input
              type="text"
              name="img"
              placeholder="Imagen aquí!!"
              onChange={onChange}
              value={form.img}
              style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
            />
          </div>
          <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', padding: '0.5rem 1rem', fontSize: '1rem', border: 'none', cursor: 'pointer' }}>Enviar</button>
        </form>
      </React.Fragment>
)
export default Formulario

/* export default class Formulario extends React.Component {
  render() {
    const { onChange, form, onSubmit } = this.props;
    return (
      <React.Fragment>
        <form onSubmit={onSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Nombre:</label>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre aquí!!"
              onChange={onChange}
              value={form.nombre}
              style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Descripción:</label>
            <input
              type="text"
              name="descripcion"
              placeholder="Descripción aquí!!"
              onChange={onChange}
              value={form.descripcion}
              style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>URL de la imagen:</label>
            <input
              type="text"
              name="img"
              placeholder="Imagen aquí!!"
              onChange={onChange}
              value={form.img}
              style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
            />
          </div>
          <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', padding: '0.5rem 1rem', fontSize: '1rem', border: 'none', cursor: 'pointer' }}>Enviar</button>
        </form>
      </React.Fragment>
    );
  }
} */