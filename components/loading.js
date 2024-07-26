import React from "react";
import { View, StyleSheet } from "react-native";
import Number from "./number";
import Colon from "./colon";

const Loading = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.timerContainer}>
                    <Number time={31} label={"DAYS"}/>
                    <Colon />
                    <Number time={31} label={"HOURS"}/>
                    <Colon />
                    <Number time={31} label={"MINUTES"}/>
                    <Colon />
                    <Number time={31} label={"SECONDS"}/>
                </View>
            </View> 
        </>
    );
}

const styles = StyleSheet.create({
    timerContainer: {
        width: "75%",
        height: 140,
        borderRadius: 25,
        backgroundColor: "rgba(11, 115, 254, 255)",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "row",
        columnGap: 15,
        paddingTop: 30
    },
    container: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    }
});

export default Loading;