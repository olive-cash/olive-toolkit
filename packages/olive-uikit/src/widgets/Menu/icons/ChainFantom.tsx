import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <defs>
        <style>{".prefix__cls-fantom{fill:#fff;fill-rule:evenodd}"}</style>
        <mask
          id="prefix__mask"
          x={10}
          y={6}
          width={93.1}
          height={20}
          maskUnits="userSpaceOnUse"
        >
          <path
            className="prefix__cls-fantom"
            d="M10 6h93.1v20H10z"
            id="prefix__a_fantom"
          />
        </mask>
      </defs>
      <g id="prefix__Layer_2" data-name="Layer 2">
        <g id="prefix__Layer_1-2" data-name="Layer 1">
          <circle cx={16} cy={16} r={16} fill="#13b5ec" />
          <g mask="url(#prefix__mask)">
            <path
              className="prefix__cls-fantom"
              d="M17.2 12.9l3.6-2.1V15zm3.6 9L16 24.7l-4.8-2.8V17l4.8 2.8 4.8-2.8zm-9.6-11.1l3.6 2.1-3.6 2.1zm5.4 3.1l3.6 2.1-3.6 2.1zm-1.2 4.2L11.8 16l3.6-2.1zm4.8-8.3L16 12.2l-4.2-2.4L16 7.3zM10 9.4v13.1l6 3.4 6-3.4V9.4L16 6z"
            />
          </g>
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
