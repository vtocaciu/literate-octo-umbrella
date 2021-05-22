import { View, StyleSheet, Text } from "react-native";
import React from 'react';
import { Sleep } from "../Models/Sleep";
import { useIsFocused } from "@react-navigation/native";
import { getSleepData } from "../Services/SleepService";
import MyButton from "../Controls/MyButton";
import { normalizeFontSize } from "../utils/resizeUtils";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryGroup } from "victory-native";
import { formatDate } from "../utils/consts";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function Stats(): JSX.Element {



    const [next, hasNext] = React.useState<boolean>(false);
    const [prev, hasPrev] = React.useState<boolean>(true);
    const [counter, setCounter] = React.useState<number>(0);
    const [sleepList, setSleepList] = React.useState<Sleep[]>();
    const isFocused = useIsFocused();

    React.useEffect(() => {
        getSleepData().then((data) => { setSleepList(data.reverse()); setCounter(data.length - 1); hasNext(false); hasPrev(true) });
    }, [isFocused])

    const prevOnClick = (): void => {
        const index = counter - 3;
        setCounter(counter - 3)
        hasPrev(index > 0)
        hasNext(sleepList != undefined && index < sleepList.length - 1)
    }

    const nextOnClick = (): void => {
        if (sleepList) {
            const index = counter + 3
            setCounter(counter + 3);
            hasPrev(index > 0)
            hasNext(sleepList != undefined && index < sleepList.length - 1)
        }

    }

    const checkCondition = (index: number): boolean => {
        return sleepList != undefined && index < sleepList.length && index >= 0
    }


    const getAvg = (): number => {
        if (sleepList) {
            let sum = 0;
            let num = 0;
            if (sleepList[counter]) {
                sum = sum + sleepList[counter].actualSleepDuration;
                num = num + 1
            }
            if (sleepList[counter - 1]) {
                sum = sum + sleepList[counter - 1].actualSleepDuration;
                num = num + 1
            }
            if (sleepList[counter - 2]) {
                sum = sum + sleepList[counter - 2].actualSleepDuration;
                num = num + 1
            }
            return Math.floor(sum / num);
        }
        return 0;
    }

    const getHourAvg = (): number => {
        if (sleepList) {
            let sum = 0;
            let num = 0;
            if (sleepList[counter]) {
                sum = sum + new Date(sleepList[counter].inBedTime).getHours();
                
                num = num + 1
            }
            if (sleepList[counter - 1]) {
                sum = sum + new Date(sleepList[counter - 1].inBedTime).getHours();
                num = num + 1
            }
            if (sleepList[counter - 2]) {
                sum = sum + new Date(sleepList[counter - 2].inBedTime).getHours();
                num = num + 1
            }
            return Math.floor(sum / num);
        }
        return 0;
    }

    const getMinutesAvg = (): number => {
        if (sleepList) {
            let sum = 0;
            let num = 0;
            if (sleepList[counter]) {
                sum = sum + new Date(sleepList[counter].inBedTime).getMinutes();
                
                num = num + 1
            }
            if (sleepList[counter - 1]) {
                sum = sum + new Date(sleepList[counter - 1].inBedTime).getMinutes();
                num = num + 1
            }
            if (sleepList[counter - 2]) {
                sum = sum + new Date(sleepList[counter - 2].inBedTime).getMinutes();
                num = num + 1
            }
            return Math.floor(sum / num);
        }
        return 0;
    }


    const getHourWakeAvg = (): number => {
        if (sleepList) {
            let sum = 0;
            let num = 0;
            if (sleepList[counter]) {
                sum = sum + new Date(sleepList[counter].outBedTime).getHours();
                
                num = num + 1
            }
            if (sleepList[counter - 1]) {
                sum = sum + new Date(sleepList[counter - 1].outBedTime).getHours();
                num = num + 1
            }
            if (sleepList[counter - 2]) {
                sum = sum + new Date(sleepList[counter - 2].outBedTime).getHours();
                num = num + 1
            }
            return Math.floor(sum / num);
        }
        return 0;
    }

    const getMinutesWakeAvg = (): number => {
        if (sleepList) {
            let sum = 0;
            let num = 0;
            if (sleepList[counter]) {
                sum = sum + new Date(sleepList[counter].outBedTime).getMinutes();
                
                num = num + 1
            }
            if (sleepList[counter - 1]) {
                sum = sum + new Date(sleepList[counter - 1].outBedTime).getMinutes();
                num = num + 1
            }
            if (sleepList[counter - 2]) {
                sum = sum + new Date(sleepList[counter - 2].outBedTime).getMinutes();
                num = num + 1
            }
            return Math.floor(sum / num);
        }
        return 0;
    }


    const firstData = [{ x: sleepList && checkCondition(counter - 2) ? formatDate(sleepList[counter - 2].date) : 0, y: sleepList && checkCondition(counter - 2) ? sleepList[counter - 2].inBedAwakePercentage : 0 },
    { x: sleepList && checkCondition(counter - 1) ? formatDate(sleepList[counter - 1].date) : 0, y: sleepList && checkCondition(counter - 1) ? sleepList[counter - 1].inBedAwakePercentage : 0 },
    { x: sleepList && checkCondition(counter) ? formatDate(sleepList[counter].date) : 0, y: sleepList && checkCondition(counter) ? sleepList[counter].inBedAwakePercentage : 0 }];

    const secondData = [{ x: sleepList && checkCondition(counter - 2) ? formatDate(sleepList[counter - 2].date) : 0, y: sleepList && checkCondition(counter - 2) ? sleepList[counter - 2].lightSleepPercentage + sleepList[counter - 2].REMPercentage : 0 },
    { x: sleepList && checkCondition(counter - 1) ? formatDate(sleepList[counter - 1].date) : 0, y: sleepList && checkCondition(counter - 1) ? sleepList[counter - 1].lightSleepPercentage + sleepList[counter - 1].REMPercentage : 0 },
    { x: sleepList && checkCondition(counter) ? formatDate(sleepList[counter].date) : 0, y: sleepList && checkCondition(counter) ? sleepList[counter].lightSleepPercentage + sleepList[counter].REMPercentage : 0 }];


    const thirdData = [{ x: sleepList && checkCondition(counter - 2) ? formatDate(sleepList[counter - 2].date) : 0, y: sleepList && checkCondition(counter - 2) ? sleepList[counter - 2].deepSleepPercentage : 0 },
    { x: sleepList && checkCondition(counter - 1) ? formatDate(sleepList[counter - 1].date) : 0, y: sleepList && checkCondition(counter - 1) ? sleepList[counter - 1].deepSleepPercentage : 0 },
    { x: sleepList && checkCondition(counter) ? formatDate(sleepList[counter].date) : 0, y: sleepList && checkCondition(counter) ? sleepList[counter].deepSleepPercentage : 0 }];

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                {prev ? <Ionicons name={"arrow-back-outline"} size={35} color={"black"} onPress={prevOnClick} /> : null}
                <Text>Sleep statistics for the last three days</Text>
                {next ? <Ionicons name={"arrow-forward-outline"} size={35} color={"black"} onPress={nextOnClick} /> : null}

            </View>
            <VictoryChart >
                <VictoryAxis dependentAxis />
                <VictoryAxis tickValues={[1, 2, 3]} label="Date" />
                <VictoryGroup offset={20}
                    colorScale={"qualitative"}
                >
                    <VictoryBar
                        data={firstData}
                    />
                    <VictoryBar
                        data={secondData}
                    />
                    <VictoryBar
                        data={thirdData}
                    />
                </VictoryGroup>
            </VictoryChart>

            <Text>
                On average you slept {Math.trunc(getAvg() / 60)} hours and {getAvg() % 60} mins 
            </Text>
            <Text>
                On average you fell asleep at {Math.trunc(getHourAvg()).toLocaleString('en-US', {minimumIntegerDigits: 2})}:{Math.trunc(getMinutesAvg()).toLocaleString('en-US', {minimumIntegerDigits: 2})}
            </Text>
            <Text>
                On average you woke up at {Math.trunc(getHourWakeAvg()).toLocaleString('en-US', {minimumIntegerDigits: 2})}:{Math.trunc(getMinutesWakeAvg()).toLocaleString('en-US', {minimumIntegerDigits: 2})}
            </Text>

            <MyButton buttonStyle={styles.button} textStyle={styles.buttonText} text="See my prediction" onClick={() => { }} />
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
        width: 300,
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
