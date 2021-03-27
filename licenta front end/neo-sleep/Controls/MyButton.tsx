import React from 'react';
import { StyleProp, ViewStyle, TextStyle, TouchableOpacity, View, Text, GestureResponderEvent } from 'react-native';

export interface IMyButton {
    buttonStyle: StyleProp<ViewStyle>;
    textStyle: StyleProp<TextStyle>;
    text: string;
    onClick: (event: GestureResponderEvent) => void;
}

export default function MyButton(props: IMyButton): JSX.Element {

    return (
        <View>
            <TouchableOpacity
                style={props.buttonStyle}
                onPress={props.onClick}>
                <Text style={props.textStyle}>
                    {props.text}
                </Text>
            </TouchableOpacity>
        </View>
    );
}