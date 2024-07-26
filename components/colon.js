import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Colon = () => {
    return (
        <>
            <View style={styles.colon}>
                <Text style={styles.timeColon}>
                    :
                </Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    timeColon: {
        fontSize: 40,
        fontWeight: "900",
        color: "white",
    },
    colon: {
        height: 65,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Colon;