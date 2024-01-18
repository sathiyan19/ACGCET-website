import React from "react";

import "./Listformat.css";

const Listformat = ({ points }) => {
  return (
    <div>
      <main>
        <ol class="gradient-list">
          {points.map((item) => (
            <li key={item.id}>{item.point}</li>
          ))}
        </ol>
      </main>
    </div>
  );
};

export default Listformat;
