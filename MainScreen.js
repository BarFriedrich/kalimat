import React from 'react';
import { signOut } from "firebase/auth";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import auth from './firebase-config';

const MainScreen = ({ navigation }) => {
    const signUp = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    };
    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <Text>Main Page</Text>
                <TouchableOpacity>
                    <Text onPress={() => signUp()}>Sign Out</Text>
                    <Text style = {{padding: 16, backgroundColor: 'yellow'}} onPress={() => navigation.navigate('bubbles')}>Bubbles</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default MainScreen;