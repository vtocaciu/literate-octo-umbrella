import { TextInput, View, StyleSheet, Button, TouchableOpacity, Text, GestureResponderEvent, Image } from "react-native";
import React from 'react';
import MyButton from "../Controls/MyButton";

//logo color 4D1E5B
export default function Login({navigation}: any): JSX.Element {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onClick = (event: GestureResponderEvent): void => {
        /*navigation.reset({
            index: 0,
            routes: [{name: 'Bottom'}]
        })*/
        navigation.navigate('Bottom');
    }

    return (
        <View style={styles.container}>
            
            <View style={styles.box}>
                <Image source={require('../Icons/logo.png')} style={styles.imageStyle}/>
                <TextInput
                    style={styles.textInput}
                    placeholder="username"
                    onChangeText={setUsername}
                    value={username}
                />
                <TextInput
                    style={{ ...styles.textInput, marginTop: 30 }}
                    placeholder="password"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />
                <MyButton buttonStyle={styles.button} textStyle={styles.buttonText} text="login" onClick={onClick} />
                <Text style={styles.signUpStyle}>Don't have an account? {'\n'} Click here to sign up!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'rgba(116, 164, 188, 1)',
        backgroundColor: 'rgba(60, 219, 211, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',

    },
    box: {
        borderRadius: 25,
        borderWidth: 1,
        padding: 70,
        width: '85%',
        height: '65%',
        borderColor: '#fff',
        backgroundColor: 'rgba(255,255,255,0.5)',
    },
    textInput: {
        borderColor: 'gray',
        borderBottomWidth: 1,
        fontSize: 20,
        alignSelf: 'center',
        paddingLeft: '10%',
        paddingRight: '10%',
        width: '70%',
    },
    button: {
        marginTop: 30,
        backgroundColor: '#4D1E5B',
        borderRadius: 5,
        height: '25%',
    },
    buttonText: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 25,
    },
    imageStyle: {
        height: '44%',
        width: '100%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    signUpStyle: {
        alignSelf: 'center',
        color: '#4D1E5B'
    }
});
