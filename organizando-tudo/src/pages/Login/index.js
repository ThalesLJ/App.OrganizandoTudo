import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions, View, Alert } from 'react-native';
import MyText from '../../components/MyText';
import MyButton from '../../components/MyButton';
import MyLink from '../../components/MyLink';
import MyInput from '../../components/MyInput';
import { useSafeAreaInsets, } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { APILogin } from '../../services/api/usuarios';
import { CreateSession, GetSession, DeleteSessions } from '../../services/session/usuarios';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Login({ login }) {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    const [apelido, setApelido] = useState('');
    const [senha, setSenha] = useState('');
    const [session, setSession] = useState('');

    useEffect(() => {
        const VerifySession = async () => {
            let session = { apelido: '', email: '', senha: '', token: '', manter: '' };
            const resultado = await GetSession();
            for (let i = 0; i < resultado.length; i++) {
                if(resultado[i][0] == 'apelido') session.apelido = resultado[i][1];
                if(resultado[i][0] == 'email') session.email = resultado[i][1];
                if(resultado[i][0] == 'senha') session.senha = resultado[i][1];
                if(resultado[i][0] == 'token') session.token = resultado[i][1];
                if(resultado[i][0] == 'manter') session.manter = resultado[i][1];
            }
            // setSession(session);

            if(session.manter == 'true'){
                navigation.navigate('TabRoutes');
            }
            else{
                await DeleteSessions();
            }
        }
        VerifySession();
    }, []);

    async function Login() {
        try {
            const resultado = await APILogin(apelido, senha);
            if (resultado.Token != null) {
                await DeleteSessions();
                await CreateSession(apelido, resultado.Email, senha, resultado.Token, 'true');
                // navigation.navigate('TabRoutes');
            }
            else {
                Alert.alert(login.page, login.userNotFound);
            }
        }
        catch (error) {
            Alert.alert(login.page, login.userNotFound);
        }
    }

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

        <MyInput style={styles.entries} password={false} placeholder={login.txtNickname}
            returnType='next' value={apelido} onChangeText={setApelido}></MyInput>

        <MyInput style={styles.entries} password={true} placeholder={login.txtPassword}
            value={senha} onChangeText={setSenha} onSubmitEditing={Login}></MyInput>

        <MyButton style={styles.button} onPress={Login}>{login.button}</MyButton>

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
