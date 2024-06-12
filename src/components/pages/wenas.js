import React from "react";
import Formulario from "../Formulario";
import Card from "../Card";

export default class Wenas extends React.Component {
  state = {
    form: {
      nombre: "",
      descripcion: "",
      img: ""
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state);
    try {
      let config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state.form)
      };
      let res = await fetch("http://localhost:8000/api/info", config);
      let json = await res.json();
      console.log(json);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
    console.log(this.state);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        [name]: value
      }
    }));
  };

  render() {
    return (
      <div>
        <Card {...this.state.form} />
        <Formulario
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          form={this.state.form}
        />
      </div>
    );
  }
}
