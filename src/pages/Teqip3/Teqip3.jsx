import React from 'react'

import "./Teqip3.css";

import { teqip3 } from "../../constants/teqip3";

const Teqip3 = () => {
  return (
    <div className='teqip3_tab'>
      <table className="teqip1_table">
        <tr>
          <th>S.NO</th>
          <th>PARTICULARS</th>
          <th>BUDGET</th>
        </tr>

        {teqip3.map((item) => (
          <tr>
            <td className="teqip3_first">{item.sno}</td>
            <td className="teqip3_second">{item.particulars}</td>
            <td className="teqip3_third">{item.budget}</td>
          </tr>
        ))}

        <tr>
          <td className="teqip3_first" colspan="2">Total Amount(Rs.)</td>
          <td className="teqip3_third">Rs. 7,00,00,000/-</td>
        </tr>

      </table>
    </div>
  )
}

export default Teqip3