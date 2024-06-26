import React,{useEffect} from 'react'

import "./T3_procure.css";

import { Floatinmenu,Backtotop, Underline } from '../../widgets'

import { teqip3_floater_menu } from '../../constants/teqip3-float';

import { Table } from "../../components";

import { t3_procure } from '../../constants/teqip3';


const T3_procure = () => {
  useEffect(() => {
    document.title = 'ACCET-Teqip 3 | Procurement';
  }, []);
    const columns = [
        { field: "sno",header:"S.No"},
        { field: "dept",header:"department"},
        { field: "pack_name",header:"package name"},
        { field: "amount",header:"amount (Rs.)"}
      ];
  return (
    <>
    <Backtotop/>
    <div className='proc_tot'>
      
    <div className='proc_head'><Underline heading="Teqip - Procurement"/></div>
      
      <Floatinmenu head={teqip3_floater_menu.head} links={teqip3_floater_menu.links}/>
   
      <div className='proc_tab'>
      <Table data={t3_procure} columns={columns} />
      </div>
    
    </div>
    </>
  )
}

export default T3_procure