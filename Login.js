import { signInWithEmailAndPassword } from 'firebase/auth';
import React,{useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import auth from './firebase-config';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [psw, setPsw] = useState('');

    function loginUser(email, password) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    resizeMode="contain"
                    source={require('./images/KalematLogoTransparent.png')} />
                <Text style={styles.title}>Welcome Back!</Text>
                <TextInput textAlign="center" onChangeText={setEmail} placeholder="EMAIL" style={styles.textinput} maxLength={40} />
                <TextInput textAlign="center" onChangeText={setPsw} placeholder="PASSWORD" style={styles.textinput} maxLength={40} />
                <TouchableOpacity style={styles.loginBtn} onPress={() => loginUser(email, psw)}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
                <View style={styles.footer}>
                    <Text style={styles.loginText1}>New? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <Text style={styles.loginText2}>Register.</Text>
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
        height: '100%',
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
    loginBtn: {
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
        bottom: 50,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        marginTop: 120
    },
    loginText2: {
        fontWeight: 'bold',
        color: 'darkcyan',
    },
});

export default Login;