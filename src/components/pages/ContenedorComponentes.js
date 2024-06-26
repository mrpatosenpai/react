import React,{useState,useEffect} from "react";
import RenderMaestro from "../RenderMaestro";

const ContenedorComponentes =()=>{
  const [data,SetData]=useState([])
  useEffect(()=>{
    const cargarComponentes =async()=>{
      let res = await fetch('http://localhost:8000/api/info');
      let data = await res.json();
      SetData(data)
    }
    cargarComponentes()
  },[])
  return <RenderMaestro data={data} />;

}
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
