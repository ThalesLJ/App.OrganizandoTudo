import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function MyText({ children, style }) {

    let receivedStyle = style;

    if (style?.fontWeight === 'bold') {
        receivedStyle = styles.myBoldText;
    } else {
        receivedStyle = styles.myText;
    }

    return <Text style={[style, receivedStyle]}>{children}</Text>

}

const styles = StyleSheet.create({
    myText: {
        fontFamily: 'MontserratRegular',
        fontWeight: 'normal'
    },
    myBoldText: {
        fontFamily: 'MontserratBold',
        fontWeight: 'normal'
    }
});
