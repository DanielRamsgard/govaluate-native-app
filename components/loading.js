import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Number from "./number";
import Colon from "./colon";

const Loading = () => {
    const [timer, setTimer] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const targetDate = new Date("2024-07-31T12:00:00"); // Set your target date here

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = targetDate - now;

            let timeLeft = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };

            if (difference > 0) {
                timeLeft = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                };
            }

            setTimer(timeLeft);
        };

        const interval = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.timerContainer}>
                    <Number time={timer.days} label={"DAYS"} />
                    <Colon />
                    <Number time={timer.hours} label={"HOURS"} />
                    <Colon />
                    <Number time={timer.minutes} label={"MINUTES"} />
                    <Colon />
                    <Number time={timer.seconds} label={"SECONDS"} />
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
