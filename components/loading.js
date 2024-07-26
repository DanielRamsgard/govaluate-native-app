import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Loading = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.timerContainer}>
                    <View>
                        <Text style={styles.top}>
                            31
                        </Text>
                        <Text>
                            Hours
                        </Text>
                    </View>
                    <Text style={styles.color}>
                        :
                    </Text>
                </View>
            </View> 
        </>
    );
}

const styles = StyleSheet.create({
    colon: {
        height: 70,
        
    },
    top: {
        height: 70,
    },
    timerContainer: {
        width: "75%",
        height: 140,
        borderRadius: 25,
        backgroundColor: "rgba(11, 115, 254, 255)",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        columnGap: 15,
        paddingTop: 50,
    },
    container: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    }
});

export default Loading;