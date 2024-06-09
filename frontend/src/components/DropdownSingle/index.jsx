import React from "react";
import PropTypes from "prop-types";
import "./DropdownSingle.css";

const DropdownSingle = ({ id, label, options, value, onChange }) => {
  return (
    <div className="dropdown-single">
      {label && (
        <label htmlFor={id} className="dropdown-single-label">
          {label}
        </label>
      )}
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="dropdown-single-field"
      >
        {options.map((option) => (
          <option key={option.reactKey} value={option.value}>
            {option.display}
          </option>
        ))}
      </select>
    </div>
  );
};

DropdownSingle.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      reactKey: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      display: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default DropdownSingle;
