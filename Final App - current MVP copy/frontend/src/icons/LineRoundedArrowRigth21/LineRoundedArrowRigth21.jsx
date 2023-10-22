/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const LineRoundedArrowRigth21 = ({ color = "#353E5C", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="15"
      viewBox="0 0 15 15"
      width="15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.10455 2.94249L12.1391 7.74823L7.10455 12.554"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M12.1392 7.74823L2.33922 7.74823"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

LineRoundedArrowRigth21.propTypes = {
  color: PropTypes.string,
};
