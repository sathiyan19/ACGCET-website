import React from "react";

import "./Teqip1.css";

import { teqip1 } from "../../constants/teqip1";

const Teqip1 = () => {
  return (
  <div>
    <div className="teqip1_obj">OBJECTIVE</div>
    <div className="outer">
      <div className="inner">
        <p>
        <li>To create an environment in which engineering institutions selected under the Programme can achieve their own set targets for excellence and sustain the same with autonomy and accountability.</li>
        <li>To support development plans including synergistic networking and services to community and economy of competitively selected institutions for achieving higher standards.</li>
        <li>To improve efficiency and effectiveness of the technical education management system in the States and institutions selected under the Programme.</li>
       </p>
      </div>

      <div className="inner1"></div>

      <div className="inner2"></div>
    </div>



    <div className="teqip1_tab">
      <table className="teqip1_table">
        <tr>
          <th>S.NO</th>
          <th>DETAILS</th>
          <th>AMOUNT
            (in Lakhs)
          </th>
        </tr>

        {teqip1.map((item) => (
          <tr>
            <td className="teqip1_first">{item.sno}</td>
            <td>{item.detail}</td>
            <td className="teqip1_third">{item.amount}</td>
          </tr>
        ))}

        <tr>
          <td className="teqip1_first" colspan="2">Total</td>
          <td className="teqip1_third">1548.13</td>
        </tr>
      </table>
    </div>
    </div>
  );
};

export default Teqip1;
