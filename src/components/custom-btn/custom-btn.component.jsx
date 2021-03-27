import React from "react";

import "./custom-btn.styles.scss";

const CustomBtn = ({ children, isGoogleSignIn, ...OtherBtnProps }) => (
  <button
    className={`${isGoogleSignIn ? "google" : ""} custom-button`}
    {...OtherBtnProps}
  >
    {children}
  </button>
);

export default CustomBtn;
