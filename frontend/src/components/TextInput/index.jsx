import React from "react";
import PropTypes from "prop-types";
import "./TextInput.css";

const TextInput = ({ id, label, sublabel, value, onChange, placeholder }) => {
  return (
    <div className="text-input">
      {label && (
        <label htmlFor={id} className="text-input-label">
          {label}
        </label>
      )}
      {sublabel && <div className="text-input-sublabel">{sublabel}</div>}
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="text-input-field"
      />
    </div>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  sublabel: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default TextInput;
