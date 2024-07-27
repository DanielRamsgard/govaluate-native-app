import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Chevron = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={4}
        height={4}
        fill="white"
        viewBox="0 0 16 16"
        {...props}
    >
        <Path
            fillRule="evenodd"
            stroke="white"
            strokeWidth="1.75"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
        />
    </Svg>
);

export default Chevron;
