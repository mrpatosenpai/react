import React from "react";
import Formulario from "./Formulario";
import Card from "./Card";

const Dibujar = ({ form, onChange, onSubmit }) => (

    <div>
      <Card {...form} />
      <Formulario
        onSubmit={onSubmit}
        onChange={onChange}
        form={form}
      />
    </div>
  )


export default Dibujar;