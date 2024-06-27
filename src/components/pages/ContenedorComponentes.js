import React from "react";
import RenderMaestro from "../RenderMaestro";
import useFetch from "../../hook/hook";
import url from "../../config";

const ContenedorComponentes = () => {
  const data = useFetch(`${url}/info`);

  return <RenderMaestro data={data} />;
};

export default ContenedorComponentes;
/* export default class ContenedorComponentes extends React.Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    await this.cargarComponentes();
  }

  cargarComponentes = async () => {
    try {
      let res = await fetch('http://localhost:8000/api/info');
      let data = await res.json();
      this.setState({ data });
    } catch (error) {
      console.error('Error al cargar componentes:', error);
    }
  };

  render() {
    console.log(this.state.data);
    return <RenderMaestro data={this.state.data} />;
  }
} */
