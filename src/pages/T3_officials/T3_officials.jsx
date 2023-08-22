import React from 'react'

import "./T3_officials.css";

import { Floatinmenu,Backtotop } from '../../widgets'

import { teqip3_floater_menu } from '../../constants/teqip3-float';

import { Table } from "../../components";

import { t3_off_nodal } from '../../constants/teqip3';

import { t3_off_cell } from '../../constants/teqip3';

import { t3_off_depco } from '../../constants/teqip3';

import { adstaff } from '../../constants/teqip3';

const T3_officials = () => {

  const columns = [
    { field: "sno",header:"sno"},
    { field: "name",header:"name"},
    { field: "desig",header:"designation"},
    { field: "teq",header:"teqip designation"},
    { field: "mob",header:"mobile no."},
    { field: "email",header:"e-mail"},
  ];

  return (
    <>
    <Backtotop/>
    <div className='t3_off'>

      <Floatinmenu head={teqip3_floater_menu.head} from_top={200} links={teqip3_floater_menu.links}/>

      <div className='off_head'>INSTITUTIONAL PROJECT DIRECTOR</div>
      <div className='off_tot'>
      <table className='off'>
        <tr className='off_row'>
          <td>Name</td>
          <td className='off_name'>Dr.K.MANONMANI</td>
        </tr>
        <tr className='off_row'>
          <td>Designation</td>
          <td className='off_name'>PRINCIPAL</td>
        </tr>
        <tr className='off_row'>
          <td>TEQIP Designation</td>
          <td className='off_name'>INSTITUTIONAL PROJECT DIRECTOR</td>
        </tr>
        <tr className='off_row'>
          <td>Mobile Number</td>
          <td className='off_name'>9842247959</td>
        </tr>
        <tr className='off_row'>
          <td>E-mail</td>
          <td className='off_name'>manokmani@yahoo.co.in</td>
        </tr>
      </table>
      </div>
      
      
      <div className='off_head'>TEQIP COORDINATOR</div>
      <div className='off_tot'>
      <table className='off'>
        <tr className='off_row'>
          <td>Name</td>
          <td className='off_name'>Prof.P.MADASAMY</td>
        </tr>
        <tr className='off_row'>
          <td>Designation</td>
          <td className='off_name'>ASSOCIATE PROFESSOR/EEE</td>
        </tr>
        <tr className='off_row'>
          <td>TEQIP Designation</td>
          <td className='off_name'>TEQIP COORDINATOR</td>
        </tr>
        <tr className='off_row'>
          <td>Mobile Number</td>
          <td className='off_name'>9487765385</td>
        </tr>
        <tr className='off_row'>
          <td>E-mail</td>
          <td className='off_name'>mjasmitha0612@gmail.com</td>
        </tr>
      </table>
      </div>

      <div className='off_head_nodal'>NODAL OFFICER</div>
      <div className='off_nodal'>
      <Table data={t3_off_nodal} columns={columns} />
      </div>

      <div className='off_head_cell'>TEQIP CELL OFFICERS</div>
      <div className='off_cell'>
      <Table data={t3_off_cell} columns={columns} />
      </div>

      <div className='off_head_depco'>DEPARTMENT CO-ORDINATORS</div>
      <div className='off_depco'>
      <Table data={t3_off_depco} columns={columns} />
      </div>

      <div className='off_head_adstaff'>ADMINISTRATIVE STAFF</div>
      <div className='off_adstaff'>
      <Table data={adstaff} columns={columns} />
      </div>

    </div>
    </>
  )
}

export default T3_officials