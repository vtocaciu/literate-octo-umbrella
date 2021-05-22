import { TextInput, View, StyleSheet, Text, GestureResponderEvent, Image, ScrollView, } from "react-native";
import React from 'react';
import MyButton from "../Controls/MyButton";
import { useFonts } from "expo-font";
import { normalizeFontSize, normalizeHeight } from "../utils/resizeUtils";
import { auth } from "../Services/UserService";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Auth({ navigation }: any): JSX.Element {

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cpassword, setCPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [dateOfBirth, setDateOfBirth] = React.useState(new Date());
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [showLoading, setShowLoading] = React.useState(false);

  let [fontsLoaded] = useFonts({
    'ModernSansLight': require('../assets/fonts/ModernSansLight.ttf'),
  });

  
  const gotoLogin = (): void => {
    navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }]
    })
}

  const onClick = (event: GestureResponderEvent): void => {

    setShowLoading(true)
    if (cpassword === password) {
      auth(username, password, email, dateOfBirth, firstName, lastName)
        .then((data: any) => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }]
          })
        })
        .catch((error: any) => {
          setShowLoading(false);
          alert(error)
        }
        );
    }
    else {
      alert("Password don't match!")
      setShowLoading(false)
    }
  }

  const setDate = (event: any, date: any) => { setDateOfBirth(date) };
  const marginTop = 30;

  return !fontsLoaded ? <View><Text>Loading..</Text></View> : (
    <KeyboardAwareScrollView
      style={{ backgroundColor: 'rgba(60, 219, 211, 0.5)' }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
    >
      <View style={{ marginTop: 50, marginBottom: 50 }}>
        <ScrollView style={styles.box}>
          <Image source={require('../Icons/logo.png')} style={styles.imageStyle} />
          <Text style={styles.textDecoration}>Username</Text>
          <TextInput
            style={styles.textInput}
            placeholder="username"
            onChangeText={setUsername}
            value={username}
          />
          <Text style={{ ...styles.textDecoration, marginTop: marginTop }}>Email address</Text>
          <TextInput
            style={styles.textInput}
            placeholder="email address"
            onChangeText={setEmail}
            value={email}
          />
          <Text style={{ ...styles.textDecoration, marginTop: marginTop }}>First Name</Text>
          <TextInput
            style={{ ...styles.textInput }}
            placeholder="first name"
            onChangeText={setFirstName}
            value={firstName}
            
          />
          <Text style={{ ...styles.textDecoration, marginTop: marginTop }}>Last Name</Text>
          <TextInput
            style={{ ...styles.textInput }}
            placeholder="last name"
            onChangeText={setLastName}
            value={lastName}
            
          />
          <Text style={{ ...styles.textDecoration, marginTop: marginTop }}>Password</Text>
          <TextInput
            style={{ ...styles.textInput }}
            placeholder="password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
          <TextInput
            style={{ ...styles.textInput, marginTop: 20 }}
            placeholder="confirm password"
            onChangeText={setCPassword}
            value={cpassword}
            secureTextEntry
          />
          {/* <Text style={{ ...styles.textDecoration, marginTop: marginTop }}>Date of Birth</Text>
          <DateTimePicker date={dateOfBirth} onDateChange={setDateOfBirth}/> */}

          {!showLoading ?
            <MyButton buttonStyle={styles.button} textStyle={styles.buttonText} text="Sign up" onClick={onClick} />
            : <Image source={require('../Icons/loading.gif')} style={styles.loadingImage} />
          }
          <Text style={styles.signUpStyle} onPress={gotoLogin}>Already have an account? {"\n"} Press here to sign in!</Text>


        </ScrollView>
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
    fontSize: normalizeFontSize(12),
    marginBottom: 30
  },
  loadingImage: {
    alignSelf: 'center',
    height: 40,
    width: 40,
    marginTop: 50,
  }
});
