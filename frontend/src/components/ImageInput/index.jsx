import React from "react";
import PropTypes from "prop-types";
import "./ImageInput.css";

const ImageInput = ({ id, label, sublabel, invert }) => {
  return (
    <div className="image-input">
      {label && (
        <label htmlFor={id} className="image-input-label">
          {label}
        </label>
      )}
      {sublabel && <div className="image-input-sublabel">{sublabel}</div>}
      <input
        type="file"
        id={id}
        className={`image-input-field ${invert ? "invert" : ""}`}
      />
    </div>
  );
};

ImageInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  sublabel: PropTypes.string,
  invert: PropTypes.bool,
};

export default ImageInput;
