import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Number = (props) => {
    return (
        <>
            <View style={{ alignItems: "center" }}>
                <View style={styles.top}>
                    <Text style={styles.time}>
                        { props.time }
                    </Text>
                </View>
                <Text style={styles.timeLabel}>
                    { props.label }
                </Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    time: {
        fontSize: 60,
        fontWeight: "600",
        color: "white",
    },
    timeLabel: {
        fontSize: 15,
        fontWeight: "300",
        color: "white",
    },
    top: {
        height: 65,
        width: 75,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Number;