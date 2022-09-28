import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import MyText from './MyText';

export default function MyButton({ children, style }) {
    return <TouchableOpacity style={[style,styles.container]}>
        <MyText style={styles.link}>{children}</MyText>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        width: '30%',
    },
    link: {
        color: '#35C0ED',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    }
});
