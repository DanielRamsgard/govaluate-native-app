import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import LogoFill from "./logoFill";
import Eraser from "./eraser";
import Stylus from "./stylus";
import Chevron from "./chevron";
import ZoomIn from "./zoomIn";
import ZoomOut from "./zoomOut";
import Undo from "./undo";
import Forward from "./forward";

const PDFStylus = () => {
    const windowWidth = Dimensions.get('window').width;

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
                    <View style={styles.zoomContainer}>  
                        <View style={styles.container}>
                            <Undo />
                        </View>
                        <View style={styles.container}>
                            <Forward />
                        </View>
                        <View style={styles.container}>
                            <ZoomIn />
                        </View>
                        <View style={styles.container}>
                            <ZoomOut />
                        </View>
                    </View>
                    <View style={[styles.barContainer, { width: windowWidth < 667 ? "5%" : "10%" }]}>
                        <View style={styles.bar}>

                        </View>
                    </View>
                    <View style={styles.zoomContainer}>  
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
                    <View style={[styles.barContainer, { width: windowWidth < 667 ? "5%" : "10%" }]}>
                        <View style={styles.bar}>

                        </View>
                    </View>
                    <View style={styles.zoomContainer}> 
                        <View style={styles.container}>
                            <View style={[styles.width, { height: 2 }]}>
                                
                            </View>
                        </View>
                        <View style={styles.container}>
                            <View style={[styles.width, { height: 3 }]}>
                                
                            </View>
                        </View>
                        <View style={styles.container}>
                            <View style={[styles.width, { height: 4 }]}>
                                
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    bar: {
        width: 1,
        height: "65%",
        backgroundColor: "rgb(230,230,230)",
    },
    barContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: "10%",
        height: "100%"
    },
    zoomContainer: {
        flexDirection: "row",
    },
    width: {
        width: "50%",
        borderRadius: 10,
        backgroundColor: "rgb(210,210,210)",
    },
    circle: {
        justifyContent: "center",
        alignItems: "center",
        width: 10,
        height: 10,
        borderRadius: 10,
    },
    container: {
        width: 30,
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
        borderBottomColor: "rgb(230,230,230)",
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