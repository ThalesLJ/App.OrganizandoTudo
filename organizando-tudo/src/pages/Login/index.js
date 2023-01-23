import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import MyText from '../../components/MyText';
import MyButton from '../../components/MyButton';
import MyLink from '../../components/MyLink';
import MyInput from '../../components/MyInput';
import { useSafeAreaInsets, } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Login({ login }) {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    return <View style={[
        styles.container,
        {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        },
    ]} >

        <MyText style={styles.title}>{login.displayAppName}</MyText>

        <MyInput style={styles.entries} password={false} returnType='next'>{login.txtNickname}</MyInput>
        <MyInput style={styles.entries} password={true} onSubmitEditing={() => {
            // Login method
        }}>{login.txtPassword}</MyInput>

        <MyButton style={styles.button} onPress={() => {

            navigation.navigate('TabRoutes');
        }}>{login.button}</MyButton>

        <MyLink style={styles.newAccount} onPress={() => {
            // Page 'Create new Account'
        }}>{login.newAccount}</MyLink>

        <MyLink style={styles.lostPassword} onPress={() => {
            // Page 'Recover Password'
        }}>{login.lostPassword}</MyLink>

    </View>
}

const styles = StyleSheet.create({
    title: {
        width: '100%',
        textAlign: 'center',
        padding: 40,
        fontSize: 30,
        marginBottom: '1%',
    },
    entries: {
        width: '90%',
        marginBottom: '3%',
        alignSelf: 'center',
    },
    button: {
        width: '90%',
        alignSelf: 'center',
        marginTop: '8%',
    },
    newAccount: {
        marginTop: '6%',
        alignSelf: 'center',
    },
    lostPassword: {
        width: '35%',
        marginTop: '6%',
        alignSelf: 'center',
    }
});
