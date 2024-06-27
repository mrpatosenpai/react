import { useState,useEffect } from "react";

const useFetch=url=>{
    const [data,SetData]=useState([])
    useEffect(()=>{
        const cargarComponentes =async()=>{
          let res = await fetch(url);
          let data = await res.json();
          SetData(data)
        }
        cargarComponentes()
      },[url])
      return data
}
export default useFetch