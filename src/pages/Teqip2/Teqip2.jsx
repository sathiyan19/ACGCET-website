import React from 'react'

import "./Teqip2.css";

import { teqip2 } from "../../constants/teqip2";

const Teqip2 = () => {
  return (
    <div className="teqip2_tab">
      <table className="teqip2_table">
        <tr>
          <th>S.NO</th>
          <th>CATEGORY</th>
          <th className="teqip2_head3">% OF ALLOTMENT</th>
          <th>AMOUNT
            (in Lakhs)
          </th>
        </tr>

        {teqip2.map((item) => (
          <tr>
            <td className="teqip2_first">{item.sno}</td>
            <td>{item.category}</td>
            <td className="teqip2_third">{item.percent}</td>
            <td className="teqip2_fourth">{item.amount}</td>
          </tr>
        ))}

        <tr>
          <td className="teqip2_first" colspan="2">Total</td>
          <td className="teqip2_third">100</td>
          <td className="teqip2_fourth">1750.00</td>
        </tr>

      </table>
    </div>
  )
}

export default Teqip2