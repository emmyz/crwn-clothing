import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...OtherInputProps }) => (
  <div className="group">
    <input
      className="form-input"
      onChange={handleChange}
      {...OtherInputProps}
    />
    {label ? (
      <label
        className={`${
          OtherInputProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
