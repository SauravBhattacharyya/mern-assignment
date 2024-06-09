import React from "react";
import PropTypes from "prop-types";
import "./VideoInput.css";

const VideoInput = ({ id, label, sublabel }) => {
  return (
    <div className="video-input">
      {label && (
        <label htmlFor={id} className="video-input-label">
          {label}
        </label>
      )}
      {sublabel && <div className="video-input-sublabel">{sublabel}</div>}
      <input
        type="file"
        id={id}
        className="video-input-field"
        accept="video/*"
      />
    </div>
  );
};

VideoInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  sublabel: PropTypes.string,
};

export default VideoInput;
