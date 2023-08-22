import React from "react";

import "./Teqip2.css";

import { teqip2 } from "../../constants/teqip2";

import { Table } from "../../components";

import { Backtotop } from "../../widgets";

const Teqip2 = () => {
  const columns = [
    { field: "sno", header: "sno" },
    { field: "category", header: "category" },
    { field: "percent", header: "% of allotment" },
    { field: "amount", header: "amount" },
  ];
  return (
    <div>
      <Backtotop/>
      <div className="teqip2_heading">TEQIP-II</div>
      <div className="teqip2_content">
        <p>
          As per TEQIP project design, the institution has been selected for
          TEQIP-II based on its performance metrics of TEQIP-I. TEQIP – II is
          implemented with the intent to scale up PG Programs and Research
          activities of the institution. The Project duration was 2012-16. Total
          amount sanctioned under TEQIP- II was Rs.17.5 Crore.
        </p>
      </div>
      <div className="teqip2_obj">OBJECTIVE</div>
      <div className="teqip2_inner">
        <p>
          <li>
            Strengthening institutions to improve learning outcomes and
            employability of graduates.
          </li>
        </p>
        <p>
          <li>
            Scaling‐up Postgraduate Education and demand‐driven Research &
            Development and Innovation.
          </li>
        </p>
        <p>
          <li>
            Establishing Centre of Excellence for focused applicable research.
          </li>
        </p>
        <p>
          <li>Training of faculty for effective teaching.</li>
        </p>
        <p>
          <li>Enhancing Institutional and System Management effectiveness.</li>
        </p>
      </div>

      <div className="teqip2_tab">
        <Table data={teqip2} columns={columns} />
      </div>
      
    </div>
  );
};

export default Teqip2;

// <div className="teqip2_tab">
//       <table className="teqip2_table">
//         <tr>
//           <th>S.NO</th>
//           <th>CATEGORY</th>
//           <th className="teqip2_head3">% OF ALLOTMENT</th>
//           <th>AMOUNT
//             (in Lakhs)
//           </th>
//         </tr>

//         {teqip2.map((item) => (
//           <tr>
//             <td className="teqip2_first">{item.sno}</td>
//             <td>{item.category}</td>
//             <td className="teqip2_third">{item.percent}</td>
//             <td className="teqip2_fourth">{item.amount}</td>
//           </tr>
//         ))}

//         <tr>
//           <td className="teqip2_first" colspan="2">Total</td>
//           <td className="teqip2_third">100</td>
//           <td className="teqip2_fourth">1750.00</td>
//         </tr>

//       </table>
//     </div>
