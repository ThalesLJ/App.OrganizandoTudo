import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import MyText from './MyText';

export default function MyButton({ children, style, onPress }) {
    return <TouchableOpacity style={[style, styles.button]} onPress={onPress}>
        <MyText style={styles.text}>
            {children}
        </MyText>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#35C0ED',
        borderRadius: 8
    },
    text: {
        textAlign: 'center',
        padding: 18,
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold',
    },
});
