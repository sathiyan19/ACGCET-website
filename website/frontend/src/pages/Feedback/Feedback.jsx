import React ,{useEffect}from 'react'
import "./Feedback.css";
import { Backtotop,  Underline } from "../../widgets";
import { Radial_menu, Listformat } from "../../components";

import { FaMicrochip } from "react-icons/fa6";

const Feedback = () => {
    useEffect(() => {
        document.title = 'ACCET-FEEDBACK ';
      }, []);
  return (
    <div>Feedback</div>
  )
}

export default Feedback