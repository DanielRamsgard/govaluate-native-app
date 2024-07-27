import React from "react";
import Svg, { Path } from "react-native-svg";

const ZoomOut = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={12}
        fill="currentColor"
        viewBox="0 0 16 16"
        {...props}
    >
        <Path
            fillRule="evenodd"
            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
        />
        <Path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z" />
        <Path
            fillRule="evenodd"
            d="M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"
        />
    </Svg>
);

export default ZoomOut;
