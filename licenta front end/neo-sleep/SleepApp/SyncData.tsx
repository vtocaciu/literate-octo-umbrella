import { View, StyleSheet, Text } from "react-native";
import React from 'react';
export default function SyncData(): JSX.Element {

    return (
        <View style={styles.container}>
            <Text>Sync screen</Text>

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
