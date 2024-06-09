import React from "react";
import PropTypes from "prop-types";
import "./CheckboxList.css";

const CheckboxList = ({ id, label, options, values, onChange }) => {
  const handleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      onChange([...values, value]);
    } else {
      onChange(values.filter((v) => v !== value));
    }
  };

  return (
    <div className="checkbox-list">
      {label && <label className="checkbox-list-label">{label}</label>}
      {options.map((option) => (
        <div key={option.reactKey} className="checkbox-list-item">
          <input
            type="checkbox"
            id={`${id}-${option.reactKey}`}
            value={option.value}
            checked={values.includes(option.value)}
            onChange={handleChange}
          />
          <label htmlFor={`${id}-${option.reactKey}`}>{option.display}</label>
        </div>
      ))}
    </div>
  );
};

CheckboxList.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      reactKey: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      display: PropTypes.string.isRequired,
    })
  ).isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CheckboxList;
