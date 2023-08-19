import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="18" r="16.5" fill="white" stroke="#0133FE" stroke-width="3"/>
<path d="M16.2169 16.1719H12.6562L15.39 5.625H20.6044L23.3381 16.1719H19.7775L19.3894 14.5013H16.605L16.2169 16.1719ZM17.9044 8.865L17.2125 11.8181H18.765L18.09 8.865H17.9044Z" fill="#0133FE"/>
<path d="M15.75 22.2188L18.1406 25.3125L20.5312 22.2188" stroke="#0133FE" stroke-width="5" stroke-linecap="round"/>
</svg>


  );
};

export default Icon;
