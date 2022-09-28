import {
    StyleSheet,
    Dimensions,
    View
} from 'react-native';

import MyText from '../../components/MyText';
import MyButton from '../../components/MyButton';
import MyLink from '../../components/MyLink';
import MyInput from '../../components/MyInput';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Login({ login }) {
    return <>
        <View style={styles.container}>

            <MyText style={styles.title}>{login.displayAppName}</MyText>

            <MyInput style={styles.entries} password={false} returnType='next'>{login.txtNickname}</MyInput>
            <MyInput style={styles.entries} password={true} onSubmitEditing={() => {
                // Login method
            }}>{login.txtPassword}</MyInput>

            <MyButton style={styles.button} onPress={() => {
                // Login method
            }}>{login.button}</MyButton>

            <MyLink style={styles.newAccount} onPress={() => {
                // Page 'Create new Account'
            }}>{login.newAccount}</MyLink>
            
            <MyLink style={styles.lostPassword} onPress={() => {
                // Page 'Recover Password'
            }}>{login.lostPassword}</MyLink>

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
        width: '95%',
        marginBottom: '3%',
        alignSelf: 'center',
    },
    button: {
        width: '95%',
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
