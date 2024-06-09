import React from "react";
import PropTypes from "prop-types";
import "./DatePicker.css";

const DatePicker = ({ id, label, sublabel, value, onChange }) => {
  return (
    <div className="date-picker">
      {label && (
        <label htmlFor={id} className="date-picker-label">
          {label}
        </label>
      )}
      {sublabel && <div className="date-picker-sublabel">{sublabel}</div>}
      <input
        type="date"
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="date-picker-field"
      />
    </div>
  );
};

DatePicker.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  sublabel: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DatePicker;
