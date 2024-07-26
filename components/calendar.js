import React from "react";
import Svg, { Path } from "react-native-svg";

const Calendar = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={10}
        height={10}
        fill="white"
        viewBox="0 0 16 16"
        {...props}
    >
        <Path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708" />
    </Svg>
);

export default Calendar;