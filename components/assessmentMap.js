import React from "react";
import AssessmentRow from "./assessmentRow";
import { View, SafeAreaView, StyleSheet, ScrollView, Text, TouchableOpacity, Linking } from "react-native";

const AssessmentMap = () => {
    const assessments = [
        {
            name: "Midterm 1",
            course: "Math 233: Calculus Of Functions Of Several Variables",
            extra: 10,
            start: "Jan 21 10:00AM",
            end: "Jan 21 11:15AM",
            code: "hiGhY49j"
        },
        {
            name: "Midterm 2",
            course: "Math 381: Discrete Math",
            extra: 0,
            start: "May 21 2:00PM",
            end: "May 21 3:15PM",
            code: "hiGhYa9j"
        },
        {
            name: "Final Exam",
            course: "Math 347: Applications of Linear Algebra",
            extra: 0,
            start: "Nov 11 9:00AM",
            end: "Nov 11 11:15AM",
            code: "hiGeY49j"
        },
    ]

    const handlePress = () => {
        Linking.openURL("https://govaluate.com");
    }

    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.mapContainer}>
                    {
                        assessments.length === 0

                        ?
                            <>
                                <View style={styles.containerNone}>
                                    <View style={styles.none}>
                                    <Text style={styles.noneText}> You have no upcoming assessments </Text>
                                    </View>
                                    <TouchableOpacity onPress={handlePress} style={styles.button}>
                                        <Text style={styles.buttonText}> View Courses Online </Text>
                                    </TouchableOpacity>
                                </View>
                            </>

                        :

                            assessments.map((assessment) => {
                                return <AssessmentRow key={assessment.name + assessment.code} name={assessment.name} course={assessment.course} extra={assessment.extra} start={assessment.start} end={assessment.end}/>
                            })

                    }
                    <View style={{ height: 100, width: "100%" }} />
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    containerNone: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        rowGap: 12,
    },
    buttonText: {
        fontSize: 8.5,
        color: "white",
        fontWeight: "600",
    },  
    button: {
        width: 120,
        height: 20,
        backgroundColor: "rgba(11, 115, 254, 255)",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },  
    none: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },  
    noneText: {
        fontSize: 8.5
    },  
    mapContainer: {
        width: "100%",
        height: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    container: {
        flexGrow: 1,
    },
});

export default AssessmentMap;