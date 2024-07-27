import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';

const Picker = (props) => {

    return (
        <View style={styles.container}>
            <View>
                <ColorPicker
                    onColorChangeComplete={props.updateColor}
                    thumbSize={10}
                    sliderSize={10}
                    noSnap={true}
                    row={false}
                    wheelLodingIndicator={<ActivityIndicator size={10} />}
                    sliderLodingIndicator={<ActivityIndicator size={10} />}
                    useNativeDriver={false}
                    useNativeLayout={true}
                    swatches={true}
                    color={props.color}
                    palette={['#000000', '#ed1c24', '#d11cd5', '#1633e6', '#00aeef', '#57ff0a', '#ffde17', '#f26522']}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerOne: {
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 8.5,
    },
    button: {
        width: 100,
        height: 20,
        backgroundColor: "rgba(11, 115, 254, 255)",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 120,
    },
    container: {
        width: 200,
        height: "50%",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Picker;
