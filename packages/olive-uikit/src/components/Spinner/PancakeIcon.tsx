import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="64" cy="64" r="62.5" fill="white" stroke="#0133FE" stroke-width="3"/>
<path d="M57.66 57.5H45L54.72 20H73.26L82.98 57.5H70.32L68.94 51.56H59.04L57.66 57.5ZM63.66 31.52L61.2 42.02H66.72L64.32 31.52H63.66Z" fill="#0133FE"/>
<path d="M56 79L64.5 90L73 79" stroke="#0133FE" stroke-width="16" stroke-linecap="round"/>
</svg>

  );
};

export default Icon;
