import React from "react";
import Svg, { Path } from "react-native-svg";

const EyeSlash = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={12}
        fill="rgb(60,60,60)"
        viewBox="0 0 16 16"
        {...props}
    >
        <Path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z" />
        <Path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z" />
    </Svg>
);

export default EyeSlash;