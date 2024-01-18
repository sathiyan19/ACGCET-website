import React from "react";

import './Accordion.css'

import { Listformat, Table } from "../../components";

const Accordion = ({ accord_data}) => {
  // const [flag_array,setflag_array]=useState(accord_data.map(()=>false))
  let flag_array=new Array(accord_data.length).fill(false)
  // console.log(flag_array)
  const accord_layouts=document.getElementsByClassName("accord_layout")
  const accord_tabs=document.getElementsByClassName("accord_tab-label")


  const toggle_tab = (index) => {
    flag_array[index] = !flag_array[index]
    // console.log(flag_array)
    flag_array[index]?accord_layouts[index].classList.replace("accord_close","accord_open"):accord_layouts[index].classList.replace("accord_open","accord_close")
    flag_array[index]?accord_tabs[index].classList.replace("accord_tab_non-active","accord_tab_active"):accord_tabs[index].classList.replace("accord_tab_active","accord_tab_non-active")
  };

  const close_tab = () => {
    // setflag_array(() => {
    //   const new_array =new Array(accord_data.length).fill(false);
    //   return new_array;
    // });
    flag_array.fill(false)
    // console.log(flag_array)
    for (let i = 0; i < accord_layouts.length; i++) {
      accord_layouts[i].classList.replace("accord_open", "accord_close");
      accord_tabs[i].classList.replace("accord_tab_active", "accord_tab_non-active");
    }
  };
  
  return (
    <div className="accord_row">
      <div className="accord_col">
        <div className="accord_tabs">
            {accord_data.map((item)=>
            <div className="accord_tab" >

            <label className="accord_tab-label accord_tab_non-active" onClick={() => toggle_tab(Number(item.id)-1)}>
              {item.heading}
            </label>

            <div className="accord_layout accord_close">
              {item.component==='table'  &&(<Table data={item.structure.data} columns={item.structure.columns}/>)}
              {item.component==='listformat'&&(<Listformat points={item.data}/>)}
            </div>

          </div>
          )}

          <div className="accord_tab" onClick={close_tab}>
            <label className="accord_tab-close">
              Close all
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;