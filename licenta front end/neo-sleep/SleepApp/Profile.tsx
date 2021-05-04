import { View, StyleSheet, Text, Image } from "react-native";
import React from 'react';
import { User } from "../Models/User";
import Ionicons from "react-native-vector-icons/Ionicons";
import MyButton from "../Controls/MyButton";
import { normalizeFontSize } from "../utils/resizeUtils";
import { retrieveData } from "../Services/Storage";
import { getuserbyid } from "../Services/UserService";
import { useIsFocused } from "@react-navigation/native";
import { formatDate } from "../utils/consts";

const initUser: User = { ID: "", username: "", firstName: "", lastName: "", email: "", dateOfBirth: new Date() };

const size: number = normalizeFontSize(25);
const color: string = "#4D1E5B"
export default function Profile(props: any): JSX.Element {

    const isFocused = useIsFocused();

    const [user, setUser] = React.useState<User>(initUser);

    React.useEffect(() => {
        retrieveData("token").then((data) => {
            getuserbyid(data)
                .then((user) => setUser(user))
                .catch((error) => alert(error));
        })
    }, [isFocused])

    return (
        <View style={styles.container}>
            <Image source={require('../Icons/profileIcon.png')} style={styles.imageStyle} />
            <Text style={styles.welcomeStyle}>Welcome, {user.username}!</Text>
            <View style={styles.box}>
                <View style={{ ...styles.row, marginTop: 10}}>
                    <Ionicons name={"person-outline"} size={size} color={color} />
                    <Text style={styles.textDecoration}>{user.firstName} {user.lastName}</Text>
                </View>
                <View style={styles.row}>
                    <Ionicons name={"mail-open-outline"} size={size} color={color} />
                    <Text style={styles.textDecoration}>{user.email}</Text>
                </View>
                <View style={styles.row}>
                    <Ionicons name={"calendar-outline"} size={size} color={color} />
                    <Text style={styles.textDecoration}>{formatDate(user.dateOfBirth)}</Text>
                </View>
                {/* <View style={styles.row}>
                    <Ionicons name={"bed-outline"} size={size} color={color} />
                    <Text style={styles.textDecoration}>naps taken: {350}</Text>
                </View> */}
                <MyButton buttonStyle={styles.button} textStyle={styles.buttonText} text="update info" onClick={() => { }} />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#aba9bf',

    },
    imageStyle: {
        height: 200,
        width: 250,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 100,
    },
    welcomeStyle: {
        fontFamily: 'ModernSansLight',
        fontSize: normalizeFontSize(40),
        alignSelf: 'center',
        marginBottom: 10,
        color: "white"
    },
    textDecoration: {
        fontFamily: 'ModernSansLight',
        fontSize: size,
        paddingTop: 2,
        marginBottom: 10,
        color: "#4D1E5B",
        marginLeft: 10
    },
    box: {
        borderRadius: 25,
        borderWidth: 1,
        alignSelf: 'center',
        borderColor: '#fff',
        backgroundColor: 'rgba(255,255,255,0.5)',
        height: 225 //250
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
    },
    button: {
        marginTop: 25,
        backgroundColor: '#4D1E5B',
        borderRadius: 5,
        height: 45,
        width: 200,
        alignSelf: 'center'
    },
    buttonText: {
        alignSelf: 'center',
        color: 'white',
        fontSize: normalizeFontSize(25),
        fontFamily: 'ModernSansLight',
        padding: 5
    },
});
