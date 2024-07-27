import React from "react";
import { Text, StyleSheet, View, SafeAreaView } from 'react-native';
import LogoFill from "./logoFill";
import Clipboard from "./clipboard";
import Stopwatch from "./stopwatch";
import PencilSquare from "./pencilSquare";
import Calendar from "./calendar";

const color = "white";
const smallSize = 10;

const Navigation = () => {
    return (
        <>
            <SafeAreaView>
                <View style={styles.nav}>
                    <View style={styles.top}>
                        <Text style={styles.name}>
                            Welcome, Daniel Ramsgard
                        </Text>
                        <LogoFill width={25} height={25}/>
                    </View>
                    <View style={styles.bottom}>
                        <View style={{ width: "30.5%", flexDirection: "row", alignItems: "center" }}>
                            <Text style={styles.assessment}> Name </Text>
                            <PencilSquare />
                        </View>
                        <View style={{ width: "30.5%", flexDirection: "row", alignItems: "center" }}>
                            <Text style={styles.assessment}> Course </Text>
                            <Clipboard />
                        </View>
                        <View style={{ width: "14%", flexDirection: "row", alignItems: "center" }}>
                            <Text style={styles.assessment}> Extra </Text>
                            <Stopwatch />
                        </View>
                        <View style={{ width: "25%", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                            <Text style={styles.assessment}> Schedule </Text>
                            <Calendar />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    assessment: {
        fontSize: smallSize,
        color: color,
        fontWeight: "600",
    },
    name: {
        color: color,
    },
    nav: {
        width: "100%",
        height: 100,
        backgroundColor: "rgba(11, 115, 254, 255)",
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "center",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 5,
    },
    top: {
        display: "flex",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    bottom: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center", 
    }
});

export default Navigation;