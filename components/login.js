import React, { useState } from "react";
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Eye from "./eye";
import EyeSlash from "./eyeSlash";

const Login = () => {
    const [secure, setSecure] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlePasswordPress = (bool) => {
        setSecure(bool);
    }

    const handleEmailChange = (text) => {
        setEmail(text);
        console.log(email);
    }

    const handlePasswordChange = (text) => {
        setPassword(text);
        console.log(password);
    }

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.containerTwo}>
                    <View style={styles.info}>
                        <Text style={styles.govaluate}> GoValuate </Text>
                        <View style={styles.emailPassword}>
                            <View style={[styles.input, styles.bottomBorder]}>
                                <TextInput style={styles.inputField} value={email} placeholder="Email" autoComplete="email" onChangeText={ handleEmailChange }/>
                            </View>
                            <View style={styles.input}>
                                <TextInput style={styles.inputField} value={password} placeholder="Password" autoComplete="current-password" secureTextEntry={secure} onChangeText={ handlePasswordChange }/>
                                {
                                        secure 
                                        
                                        ?
                                            <TouchableOpacity style={styles.eye} activeOpacity={1} onPress={ () => {
                                                handlePasswordPress(false);
                                            }}>
                                                <Eye /> 
                                            </TouchableOpacity>

                                        :
                                        
                                            <TouchableOpacity style={styles.eye} activeOpacity={1} onPress={ () => {
                                                handlePasswordPress(true);
                                            }}>
                                                <EyeSlash /> 
                                            </TouchableOpacity>

                                    }
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.loginButton} activeOpacity={0.8}>
                        <Text style={styles.login}>
                            Log In
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.signup} activeOpacity={0.8}>
                    <Text style={styles.signupText}>
                        Sign Up For GoValuate
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    eye: {
        position: "absolute",
        right: 10,
        top: "50%",
        transform: [{translateY: -6}],
    },
    inputField: {
        height: "100%",
        width: "100%",
        paddingLeft: 10,
        textAlignVertical: "center",
        fontSize: 8.5,
        fontWeight: "400",
        color: "rgb(30,30,30)",
    },
    bottomBorder: {
        borderBottomWidth: .5, // Adjust the border width as needed
        borderBottomColor: "rgb(210,210,210)", // Change this to your desired border color
        borderBottomStyle: "solid", // This is optional and defaults to solid
    },
    input: {
        flex: 1,
        position: "relative",
    },
    login: {
        fontSize: 10,
        color: "rgb(60,60,60)",
        fontWeight: "700",
    },
    loginButton: {
        width: 200,
        height: 25,
        borderRadius: 5,
        borderWidth: .5, // Adjust the border width as needed
        borderColor: "rgb(60,60,60)", // Change this to your desired border color
        borderStyle: "solid", // This is optional and defaults to solid
        backgroundColor: "rgb(240,240,240)",
        justifyContent: "center",
        alignItems: "center",
    },
    emailPassword: {
        width: "100%",
        height: 50,
        backgroundColor: "white",
        borderRadius: 8,
        borderWidth: .5, // Adjust the border width as needed
        borderColor: "rgb(60,60,60)", // Change this to your desired border color
        borderStyle: "solid", // This is optional and defaults to solid
    },
    govaluate: {
        fontSize: 30,
        fontWeight: "800",
        color: "white",
    },
    info: {
        width: 200,
        justifyContent: "center",
        alignItems: "center",
        rowGap: 10,
    },
    signupText: {
        fontSize: 8.5,
        color: "white",
        fontWeight: "600",
    },
    signup: {
        backgroundColor: "rgba(1, 105, 244, 255)",
        position: "absolute",
        bottom: 30,
        borderRadius: 3,
        width: 120,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: .5, // Adjust the border width as needed
        borderColor: "rgb(60,60,60)", // Change this to your desired border color
        borderStyle: "solid", // This is optional and defaults to solid
    },
    containerTwo: {
        height: "100%",
        width: 270,
        justifyContent: "center",
        alignItems: "center",
        rowGap: 10,
        paddingBottom: 50,
    },
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(11, 115, 254, 255)",
        alignItems: "center"
    }
})

export default Login;