import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import auth from './firebase-config';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getFirestore } from 'firebase/firestore';


const Register = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [psw, setPsw] = useState('');
    const [confirmPsw, setConfirmPsw] = useState('');

    const writeUserData = async (userId, name, email) => {
        const db = getFirestore();
        const collectionRef = collection(db, "users");
        const userData = { uid: userId, username: name, email: email, flafels: 5, exprience: 0 };
        await addDoc(collectionRef, userData);
    }

    function createUser(userEmail, userPassword) {
        createUserWithEmailAndPassword(auth, userEmail, userPassword)
            .then((userCredential) => {
                const user = userCredential.user;
                writeUserData(user.uid, "Jihad", userEmail);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    resizeMode="contain"
                    source={require('./images/KalematLogoTransparent.png')} />
                <Text style={styles.title}>Create Account</Text>
                <TextInput textAlign="center" onChangeText={setEmail} placeholder="EMAIL" style={styles.textinput} maxLength={40} />
                <TextInput textAlign="center" onChangeText={setPsw} placeholder="PASSWORD" style={styles.textinput} maxLength={40} />
                <TextInput textAlign="center" onChangeText={setConfirmPsw} placeholder="CONFIRM PASSWORD" style={styles.textinput} maxLength={40} />
                <TouchableOpacity style={styles.signUpBtn} onPress={() => createUser(email, psw)}>
                    <Text style={styles.btnText}> Join the Community</Text>
                </TouchableOpacity>
                <View style={styles.footer}>
                    <Text style={styles.loginText1}>Have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.loginText2}>Login.</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        top: -10,
        width: 200,
        height: 200,
    },
    title: {
        top: -20,
        fontWeight: "bold",
        fontSize: 22
    },
    textinput: {
        width: 300,
        height: 50,
        backgroundColor: "#FFFFFF",
        borderWidth: 2,
        borderColor: "#989898",
        borderStyle: "solid",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 4,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOpacity: 1,
        borderRadius: 10,
        marginVertical: 15,
    },
    signUpBtn: {
        padding: 18,
        backgroundColor: '#fdd734',
        borderRadius: 15,
        width: 200,
        marginTop: 20
    },
    btnText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 14
    },
    footer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
    },
    loginText2: {
        fontWeight: 'bold',
        color: 'darkcyan',
    },
});
export default Register;