import React from 'react';
import {
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    View
} from 'react-native';

import MyText from '../../components/MyText';
import MyButton from '../../components/MyButton';
import MyLink from '../../components/MyLink';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Login({ login }) {
    return <>
        <View style={styles.container}>

            <MyText style={styles.title}>{login.displayAppName}</MyText>

            <MyText style={styles.entries}>{login.txtApelido}</MyText>
            <MyText style={styles.entries}>{login.txtSenha}</MyText>

            <MyButton style={styles.button}>{login.button}</MyButton>

            <MyLink style={styles.link}>{login.link}</MyLink>

        </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        width: '100%',
        textAlign: 'center',
        padding: 40,
        fontSize: 30,
        marginBottom: '1%',
    },
    entries: {
        width: '100%',
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
    },
    button:{
        width: '90%',
        alignSelf: 'center',
        marginTop: '10%',
    },
    link:{
        marginTop: '6%',
        alignSelf: 'center',
    }
});
