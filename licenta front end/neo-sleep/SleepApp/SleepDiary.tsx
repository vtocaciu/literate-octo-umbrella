import { View, StyleSheet, Text } from "react-native";
import React, { Provider } from 'react';
import { addSleepDiary } from "../Services/SleepService";
import { SleepDiary } from "../Models/SleepData";
import { EMPTY_GUID } from "../utils/consts";
import SleepDiaryCard from "./SleepDiaryCard";
import { FAB, Portal, ThemeProvider } from "react-native-paper";
export default function SleepDiaryScreen(): JSX.Element {

    React.useEffect(() => {
        addSleepDiary(new SleepDiary(EMPTY_GUID, "", new Date(), "was NOT okay", 1))
    }, [])

    return (
        <ThemeProvider>
        <Portal.Host>
            <View style={styles.container}>
                <SleepDiaryCard rating={1} />
                <SleepDiaryCard rating={2} />
                <SleepDiaryCard rating={3} />
                <SleepDiaryCard rating={4} />
                <SleepDiaryCard rating={5} />

            </View>
            <FAB
                style={{
                    position: 'absolute',
                    margin: 16,
                    right: 0,
                    bottom: 0,
                }}
                small
                icon="plus"
                onPress={() => console.log('Pressed')} />
            </Portal.Host>
            </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#aba9bf',
        

    },

});
