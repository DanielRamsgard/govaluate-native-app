import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

const AssessmentRow = (props) => {
    return (
        <>
            <View style={styles.mapContainer}>
                <View style={styles.bottom}>
                    <View style={{ width: "30.5%", flexDirection: "row", alignItems: "center", paddingRight: 30 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity activeOpacity={.7}>
                                <Text style={[styles.assessment, styles.name]} numberOfLines={1}> { props.name } </Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View style={{ width: "30.5%", flexDirection: "row", alignItems: "center", paddingRight: 30 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Text style={styles.assessment} numberOfLines={1}>  { props.course } </Text>
                        </ScrollView>
                    </View>
                    <View style={{ width: "14%", flexDirection: "row", alignItems: "center" }}>
                        <Text style={styles.assessment} numberOfLines={1}> { props.extra + " (Min)" } </Text>
                    </View>
                    <View style={{ width: "25%", alignItems: "flex-end", justifyContent: "center" }}>
                        <Text style={styles.assessment} numberOfLines={1}>  { props.start }  </Text>
                        <Text style={styles.assessment} numberOfLines={1}>  { props.end }  </Text>
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    name: {
        textDecorationLine: "underline",
    },  
    assessment: {
        fontSize: 8.5,
        color: "black",
        fontWeight: "300",
        overflow: "auto",
    },
    mapContainer: {
        width: "100%",
    },
    bottom: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center", 
        borderBottomWidth: .5,
        borderBottomColor: "rgb(120,120,120)",
        height: 40,
    }
});

export default AssessmentRow;