import {View, StyleSheet, Text } from "react-native";
import React from 'react';
import MyButton from "../Controls/MyButton";
import { BaseSleep, SleepIterator } from "../Models/Sleep";
import { SleepService } from "../Services/SleepService";
import { normalizeFontSize } from "../utils/resizeUtils";
import { retrieveData } from "../Services/Storage";

const sleepService: SleepService = SleepService.initSleepService();
const sleepIterator: SleepIterator = new SleepIterator(sleepService.getSleepData());

export default function History(): JSX.Element {
   
  
    const [sleep, setSleep] = React.useState<BaseSleep>();
    const [next, hasNext] = React.useState<boolean>(false);
    const [prev, hasPrev] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (!sleepIterator)
            return;
        setSleep(sleepIterator.getCurrent());
        hasNext(sleepIterator.hasNext());
        hasPrev(sleepIterator.hasPrevious());

        retrieveData("token").then((data) => console.log("hehe", data));
    },[sleepIterator])


    return (
        <View style={styles.container}>
            {next ? <MyButton buttonStyle={styles.button} textStyle={styles.buttonText} text="next" onClick={() => { sleepIterator.next(); hasNext(sleepIterator.hasNext()); hasPrev(sleepIterator.hasPrevious()); setSleep(sleepIterator.getCurrent())}} /> : null}
            {prev ? <MyButton buttonStyle={styles.button} textStyle={styles.buttonText} text="prev" onClick={() => { sleepIterator.previous(); hasNext(sleepIterator.hasNext()); hasPrev(sleepIterator.hasPrevious()); setSleep(sleepIterator.getCurrent())}} /> : null}
            {sleep ? sleep.draw(): null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#aba9bf',
        alignItems: 'center',
        justifyContent: 'center',

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
    
});
