import React from 'react'

const SgpaDropDown = ({ options, onChange, label, value }) => (
    <div>
      {label && <label>{label}: </label>}
      <select
        className="cgpa_form_select"
        onChange={onChange}
        value={value}
      >
        <option value="" disabled>
          Select
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
  export default SgpaDropDown;
  