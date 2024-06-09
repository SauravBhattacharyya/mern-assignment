import React from "react";
import PropTypes from "prop-types";
import "./CheckboxList.css";

const CheckboxList = ({ id, label, options, selectedValues, onChange }) => {
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    let updatedValues = [...selectedValues];

    if (checked) {
      updatedValues.push(value);
    } else {
      updatedValues = updatedValues.filter((v) => v !== value);
    }

    onChange(id, updatedValues);
  };

  return (
    <div className="checkbox-list">
      <label className="checkbox-list-label">{label}</label>
      {options.map((option) => (
        <div key={option.reactKey} className="checkbox-list-item">
          <input
            type="checkbox"
            id={`${id}_${option.reactKey}`}
            value={option.value}
            checked={selectedValues.includes(option.value)}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={`${id}_${option.reactKey}`}>{option.display}</label>
        </div>
      ))}
    </div>
  );
};

CheckboxList.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      reactKey: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      display: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedValues: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
};

CheckboxList.defaultProps = {
  selectedValues: [],
};

export default CheckboxList;
