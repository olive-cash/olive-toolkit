import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg viewBox="0 0 32 32"  {...props}
         fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14.5" fill="white" stroke="#0133FE" stroke-width="3"/>
      <path d="M14.415 14.375H11.25L13.68 5H18.315L20.745 14.375H17.58L17.235 12.89H14.76L14.415 14.375ZM15.915 7.88L15.3 10.505H16.68L16.08 7.88H15.915Z" fill="#0133FE"/>
      <path d="M14 19.75L16.125 22.5L18.25 19.75" stroke="#0133FE" stroke-width="5" stroke-linecap="round"/>
    </svg>
  );
};

export default Icon;
