import React from "react";
import PropTypes from "prop-types";
import "./PDFInput.css";

const PDFInput = ({ id, label, sublabel }) => {
  return (
    <div className="pdf-input">
      {label && (
        <label htmlFor={id} className="pdf-input-label">
          {label}
        </label>
      )}
      {sublabel && <div className="pdf-input-sublabel">{sublabel}</div>}
      <input
        type="file"
        id={id}
        className="pdf-input-field"
        accept="application/pdf"
      />
    </div>
  );
};

PDFInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  sublabel: PropTypes.string,
};

export default PDFInput;
