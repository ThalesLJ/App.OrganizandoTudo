import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function MyInput({ children, placeholder, style, password, returnType, value, onChangeText }) {
    return <TextInput
        placeholder={placeholder}
        style={[style, styles.input]}
        secureTextEntry={password}
        returnKeyType={returnType}
        value={value}
        onChangeText={onChangeText}
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
