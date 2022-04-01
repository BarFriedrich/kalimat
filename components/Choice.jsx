import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Choice = (props) => {
    return (
        <TouchableOpacity
            style={styles.option}
            disabled={props.disabled}
            onPress={() => props.onPress(props.answer)}>
            <Text style={{ color: "black", fontSize: 20 }}>{props.answer}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    option: {
        borderColor: "lightgray",
        borderWidth: 2,
        borderBottomWidth: 5,
        borderRadius: 10,
        width: "80%",
        padding: 10,
        marginBottom: 20,
        textAlign: "center",
    },
});

export default Choice;