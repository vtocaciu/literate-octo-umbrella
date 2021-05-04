import { View, StyleSheet, Text } from "react-native";
import React from 'react';
export default function Stats(): JSX.Element {

/*
  const [sleep, setSleep] = React.useState<BaseSleep>();
    const [next, hasNext] = React.useState<boolean>(false);
    const [prev, hasPrev] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (!sleepIterator)
            return;
        setSleep(sleepIterator.getCurrent());
        hasNext(sleepIterator.hasNext());
        hasPrev(sleepIterator.hasPrevious());

    },[sleepIterator])


    return (
        <View style={styles.container}>
            {next ? <MyButton buttonStyle={styles.button} textStyle={styles.buttonText} text="next" onClick={() => { sleepIterator.next(); hasNext(sleepIterator.hasNext()); hasPrev(sleepIterator.hasPrevious()); setSleep(sleepIterator.getCurrent())}} /> : null}
            {prev ? <MyButton buttonStyle={styles.button} textStyle={styles.buttonText} text="prev" onClick={() => { sleepIterator.previous(); hasNext(sleepIterator.hasNext()); hasPrev(sleepIterator.hasPrevious()); setSleep(sleepIterator.getCurrent())}} /> : null}
            {sleep ? sleep.draw(): null}
        </View>
    );
*/

    return (
        <View style={styles.container}>
            <Text>Stats screen</Text>

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

});
