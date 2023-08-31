import React from "react";

import "./Teqip1.css";

import { teqip1 } from "../../constants/teqip1";

import { Table } from "../../components";

import { Backtotop } from "../../widgets";

const Teqip1 = () => {
  const columns = [
    { field: "sno", header: "sno" },
    { field: "detail", header: "detail" },
    { field: "amount", header: "amount(Lakhs)" },
  ];

  return (
    <div>
      <Backtotop/>
      <div className="teqip1_heading">TEQIP-I</div>
      <div className="teqip1_content">
        <p>
          The Programme aims to upscale and support ongoing efforts of GOI to
          improve quality of technical education and enhance existing capacities
          of the institutions to become dynamic, demand-driven, quality
          conscious, efficient and forward looking, responsive to rapid economic
          and technological developments occurring both at national and
          international levels.
        </p>
      </div>
      <div className="teqip1_obj">Objective</div>

      {/* <div className="teqip1_outer"> */}
        <div className="teqip1_inner">
          <p>
            <li>
              To create an environment in which engineering institutions
              selected under the Programme can achieve their own set targets for
              excellence and sustain the same with autonomy and accountability.
            </li>
            <li>
              To support development plans including synergistic networking and
              services to community and economy of competitively selected
              institutions for achieving higher standards.
            </li>
            <li>
              To improve efficiency and effectiveness of the technical education
              management system in the States and institutions selected under
              the Programme.
            </li>
          </p>
        </div>


      <div className="teqip1_tab">
        <Table data={teqip1} columns={columns} />
      </div>
    </div>
  );
};

export default Teqip1;

