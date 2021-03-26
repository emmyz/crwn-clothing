import React from "react";

import "./custom-btn.styles.scss";

const CustomBtn = ({ children, ...OtherBtnProps }) => (
  <button className="custom-button" {...OtherBtnProps}>
    {children}
  </button>
);

export default CustomBtn;
