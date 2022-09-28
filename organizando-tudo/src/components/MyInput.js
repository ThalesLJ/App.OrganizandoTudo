import React from 'react';
import {
    TextInput,
    StyleSheet
} from 'react-native';

export default function MyInput({ children, style, password, returnType }) {
    return <TextInput
        placeholder={children}
        style={[style, styles.input]}
        secureTextEntry={password}
        returnKeyType={returnType}
    />
}

const styles = StyleSheet.create({
    input: {
        fontFamily: 'MontserratRegular',
        backgroundColor: '#ccc8',
        color: '#000',
        borderRadius: 8,
        padding: 18,
        fontSize: 18,
    },
});
