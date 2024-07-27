import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import LogoFill from "./logoFill";
import Eraser from "./eraser";
import Stylus from "./stylus";
import Chevron from "./chevron";

const PDFStylus = () => {
    return (
        <>
            <SafeAreaView>
                <View style={styles.header}>
                    <Text style={styles.name}>
                        Midterm 1
                    </Text>
                    <LogoFill width={10} height={10}/>
                </View>
                <View style={styles.toolbar}>
                    <View style={styles.container}>
                        <Stylus width={14} height={14}/>
                    </View>
                    <View style={styles.container}>
                        <Eraser width={15} height={15}/>
                    </View>
                    <View style={styles.container}>
                        <View style={[styles.circle, { backgroundColor: "red" }]}>
                            <Chevron />
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={[styles.circle, { backgroundColor: "black" }]}>
                            
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    circle: {
        justifyContent: "center",
        alignItems: "center",
        width: 10,
        height: 10,
        borderRadius: 10,
    },
    container: {
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    toolbar: {
        width: "100%",
        height: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(250,250,250)",
        borderBottomColor: "rgb(240,240,240)",
        borderBottomWidth: .5,
    },
    name: {
        fontSize: 8.5,
        fontWeight: "600",
        color: "white",
    },
    header: {
        width: "100%",
        height: 20,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: "rgba(11, 115, 254, 255)",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    }
});

export default PDFStylus;