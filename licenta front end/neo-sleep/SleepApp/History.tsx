import {View, StyleSheet, Text, ScrollView } from "react-native";
import React from 'react';
import { getSleepData } from "../Services/SleepService";
import { getHeight, getWidth, normalizeFontSize } from "../utils/resizeUtils";
import SleepCard from "./SleepCard";
import { Sleep } from "../Models/Sleep";
import { useIsFocused } from "@react-navigation/native";


export default function History(): JSX.Element {
   
    const [sleepList, setSleepList] = React.useState<Sleep[]>();
    const isFocused = useIsFocused();

    React.useEffect(() => {
        
        getSleepData().then((data) => { setSleepList(data); });
    }, [isFocused])
    return (
        <ScrollView style={styles.container}>
            {sleepList?.map((elem: Sleep, index: number) => {
                return (<SleepCard sleep={elem} key={index} index={index%4}/>
                    )
            })}
           
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#aba9bf',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
    },
    
});
