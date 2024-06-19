import React from "react";

import Wenas from "./pages/wenas";
import { useNavigate } from "react-router-dom";

const Navegar =()=>{
    const navigate= useNavigate()
    return <Wenas navigates={navigate}/>
}

export default Navegar