import React from "react";
import Formulario from "./Formulario";
import Card from "./Card";

const Dibujar = ({ form, onChange, onSubmit }) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
     <div style={{ textAlign: 'center' }}>
      <Card {...form} />
      <Formulario
        onSubmit={onSubmit}
        onChange={onChange}
        form={form}
      />
    </div>
  </div>
   
  )


export default Dibujar;