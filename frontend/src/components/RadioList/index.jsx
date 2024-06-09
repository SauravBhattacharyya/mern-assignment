import React from "react";
import PropTypes from "prop-types";
import "./RadioList.css";

const RadioList = ({ id, label, sublabel, options, value, onChange }) => {
  return (
    <div className="radio-list">
      {label && <label className="radio-list-label">{label}</label>}
      {sublabel && <div className="radio-list-sublabel">{sublabel}</div>}
      {options.map((option) => (
        <div key={option.reactKey} className="radio-list-item">
          <input
            type="radio"
            id={`${id}-${option.reactKey}`}
            name={id}
            value={option.value}
            checked={value === option.value}
            onChange={(e) => onChange(e.target.value)}
          />
          <label htmlFor={`${id}-${option.reactKey}`}>{option.display}</label>
        </div>
      ))}
    </div>
  );
};

RadioList.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  sublabel: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      reactKey: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      display: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioList;
