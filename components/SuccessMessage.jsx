import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const SuccessMessage = (props) => {
    return (
        <View style={styles.successFooter}>
            <Text style={styles.congratsMessage}>
                You are correct!
            </Text>
            <TouchableOpacity
                style={styles.continueButton}
                onPress={props.onPress}>
                <Text style={styles.continueMessage}>
                    CONTINUE
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    successFooter: {
        width: "100%",
        backgroundColor: "#b7f28c",
        height: "100%",
        alignItems: "center",
    },
    congratsMessage: {
        color: "#62b900",
        fontWeight: "500",
        fontSize: 25,
        marginTop: 18,
    },
    continueButton: {
        backgroundColor: "#78c800",
        padding: 13,
        marginVertical: 5,
        textAlign: "center",
        borderRadius: 15,
        borderBottomColor: "black",
        borderBottomWidth: 3,
        width: "75%",
    },
    continueMessage: {
        color: "white",
        fontWeight: "600",
        fontSize: 20,
        textAlign: "center",
    }
});

export default SuccessMessage;