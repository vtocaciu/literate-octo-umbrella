import { TextInput, View, StyleSheet, Text, GestureResponderEvent, Image } from "react-native";
import React from 'react';
import MyButton from "../Controls/MyButton";
import { useFonts } from "expo-font";
import { normalizeFontSize, normalizeHeight } from "../utils/resizeUtils";
import { login } from "../Services/UserService";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { storeData } from "../Services/Storage";


//logo color 4D1E5B
export default function Login({ navigation }: any): JSX.Element {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showLoading, setShowLoading] = React.useState(false);

    let [fontsLoaded] = useFonts({
        'ModernSansLight': require('../assets/fonts/ModernSansLight.ttf'),
    });


    const gotoAuth = (): void => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Auth' }]
        })
    }

    const onClick = (event: GestureResponderEvent): void => {
        /*navigation.reset({
            index: 0,
            routes: [{name: 'Bottom'}]
        })*/
        setShowLoading(true)
        login(username, password)
            .then((data: any) => {
                storeData("token", data.token)
                    .then(() => {
                        
                        setShowLoading(false);
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Bottom' }]
                        })
                    })
                    .catch((error) => {
                        setShowLoading(false);
                        alert(error)
                    })
            })
            .catch((error) => {
                setShowLoading(false);
                alert(error)
            }
            );

    }

    return !fontsLoaded ? <View><Text>Loading..</Text></View> : (
        <KeyboardAwareScrollView
            style={{ backgroundColor: 'rgba(60, 219, 211, 0.5)' }}
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.container}
            scrollEnabled={false}
        >
            <View style={styles.box}>
                <Image source={require('../Icons/logo.png')} style={styles.imageStyle} />
                <Text style={styles.textDecoration}>Username</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="username"
                    onChangeText={setUsername}
                    value={username}
                />
                <Text style={{ ...styles.textDecoration, marginTop: 50 }}>Password</Text>
                <TextInput
                    style={{ ...styles.textInput }}
                    placeholder="password"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />
                {!showLoading ?
                    <MyButton buttonStyle={styles.button} textStyle={styles.buttonText} text="login" onClick={onClick} />
                    : <Image source={require('../Icons/loading.gif')} style={styles.loadingImage} />
                }
                <Text style={styles.signUpStyle} onPress={gotoAuth}>Don't have an account? {'\n'} Click here to sign up!</Text>


            </View>
        </KeyboardAwareScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'rgba(116, 164, 188, 1)',
        backgroundColor: 'rgba(60, 219, 211, 0.5)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        borderRadius: 25,
        borderWidth: 1,
        width: 320,
        height: 600,
        borderColor: '#fff',
        backgroundColor: 'rgba(255,255,255,0.5)',
    },
    textInput: {
        borderColor: 'gray',
        borderBottomWidth: 1,
        fontSize: normalizeFontSize(20),
        alignSelf: 'center',
        paddingLeft: 25,
        width: 250,
        fontFamily: 'ModernSansLight'
    },
    button: {
        marginTop: 50,
        backgroundColor: '#4D1E5B',
        borderRadius: 5,
        height: 40,
        width: 100,
        alignSelf: 'center',

    },
    buttonText: {
        alignSelf: 'center',
        color: 'white',
        fontSize: normalizeFontSize(25),
        fontFamily: 'ModernSansLight',
        padding: 5
    },
    imageStyle: {
        height: 200,
        width: 250,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 20
    },
    textDecoration: {
        fontFamily: 'ModernSansLight',
        fontSize: normalizeFontSize(25),
        alignSelf: 'center',
        marginBottom: 20
    },
    signUpStyle: {
        alignSelf: 'center',
        color: '#4D1E5B',
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        marginTop: 20,
        fontSize: normalizeFontSize(12)
    },
    loadingImage: {
        alignSelf: 'center',
        height: 40,
        width: 40,
        marginTop: 50,
    }
});
