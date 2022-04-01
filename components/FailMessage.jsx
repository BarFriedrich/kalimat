import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const FailMessage = (props) => {
    return (
        <View style={styles.failFooter}>
            <Text style={styles.solutionMessage}>
                Correct Answer: {'\n'} {props.solution}
            </Text>
            <TouchableOpacity
                style={styles.failMessage}
                onPress={props.onPress}>
                <Text style={styles.continueMessage}>
                    CONTINUE
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    failFooter: {
        width: "100%",
        backgroundColor: "#ffdfdf",
        height: "100%",
        alignItems: "center",
    },
    solutionMessage: {
        color: "#ea2a2a",
        fontWeight: "500",
        fontSize: 22,
        marginTop: 10,
        textAlign: "center",
    },
    failMessage: {
        backgroundColor: "#fe4a4b",
        padding: 13,
        borderRadius: 15,
        textAlign: "center",
        borderBottomColor: "#ea2a2a",
        borderBottomWidth: 5,
        width: "75%",
        marginTop: '5%',
    },
    continueMessage: {
        color: "white",
        fontWeight: "600",
        fontSize: 20,
        textAlign: "center",
    }
});

export default FailMessage;