import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import App from './components/App'
import Maestro from "./pages/maestro";


export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/Maestro" element={<Maestro/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
