import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity } from "react-native";
import LogoFill from "./logoFill";
import Eraser from "./eraser";
import Stylus from "./stylus";
import Chevron from "./chevron";
import ZoomIn from "./zoomIn";
import ZoomOut from "./zoomOut";
import Undo from "./undo";
import Forward from "./forward";
import Picker from "./colorPicker";

const PDFStylus = () => {
    const colorGlobal = "rgba(11, 115, 254, 255)";
    const [stylusWidth, setStylusWidth] = useState(0);
    const [color, setColor] = useState("#000000");
    const [picker, setPicker] = useState(false);
    const windowWidth = Dimensions.get('window').width;

    function updateColor(color) {
        setColor(color);
    }

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
                            <Undo color={colorGlobal}/>
                        </View>
                        <View style={styles.container}>
                            <Forward color={colorGlobal}/>
                        </View>
                        <View style={styles.container}>
                            <ZoomIn color={colorGlobal}/>
                        </View>
                        <View style={styles.container}>
                            <ZoomOut color={colorGlobal}/>
                        </View>
                    </View>
                    <View style={[styles.barContainer, { width: windowWidth < 600 ? "5%" : "10%" }]}>
                        <View style={styles.bar}>

                        </View>
                    </View>
                    <View style={styles.zoomContainer}>  
                        <View style={styles.container}>
                            <Stylus width={14} height={14} color={colorGlobal}/>
                        </View>
                        <View style={styles.container}>
                            <Eraser width={15} height={15} color={colorGlobal}/>
                        </View>
                        <View style={styles.container}>
                            <TouchableOpacity style={[styles.circle, { backgroundColor: color }]} onPress={() => {setPicker(true)}}>
                                <Chevron />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container}>
                            <TouchableOpacity style={[styles.circle, { backgroundColor: "black" }]} onPress={() => {setColor("#000000")}}>
                                
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.barContainer, { width: windowWidth < 600 ? "5%" : "10%" }]}>
                        <View style={styles.bar}>

                        </View>
                    </View>
                    <View style={styles.zoomContainer}> 
                        <TouchableOpacity style={[styles.container, { backgroundColor: stylusWidth === 0 ? "rgb(240,240,240)" : "transparent" }]} activeOpacity={1} onPress={() => {setStylusWidth(0)}}>
                            <View style={[styles.width, { height: 2 }]}>
                                
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.container, { backgroundColor: stylusWidth === 1 ? "rgb(240,240,240)" : "transparent" }]} activeOpacity={1} onPress={() => {setStylusWidth(1)}}>
                            <View style={[styles.width, { height: 3 }]}>
                                
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.container, { backgroundColor: stylusWidth === 2 ? "rgb(230,230,230)" : "transparent" }]} activeOpacity={1} onPress={() => {setStylusWidth(2)}}>
                            <View style={[styles.width, { height: 4 }]}>
                                
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {
                    picker 

                    ?

                    <TouchableOpacity style={{ width: "100%", height: "100%", backgroundColor: "#282828", justifyContent: "flex-start", alignItems: "center", paddingTop: 20 }} onPress={() => {setPicker(false)}}>
                        <Picker updateColor={updateColor} color={color}/>
                    </TouchableOpacity>

                    :

                    <></>

                }
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
        width: "80%",
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
        width: 15,
        height: 15,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2,
        marginLeft: 5,
        marginRight: 5,
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