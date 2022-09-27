import React from 'react';
import {
    StyleSheet,
    Dimensions
} from 'react-native';

import MyText from '../../components/MyText';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Login({ displayAppName }) {
    return <>
        <MyText style={styles.title}>{displayAppName}</MyText>
    </>
}

const styles = StyleSheet.create({
    title: {
        width: '100%',
        textAlign: 'center',
        padding: 50,
        fontSize: 33
    }
});
