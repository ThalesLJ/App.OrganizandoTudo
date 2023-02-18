import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MyText from '../../components/MyText';
import MyButton from '../../components/MyButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { DeleteSessions, GetSession } from '../../services/session/usuarios';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Configs({ configs }) {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    async function Logout() {
        const session = await GetSession();
        if (session.length > 0) { await DeleteSessions(); }
        navigation.goBack();
    }

    return <View style={[
        styles.container,
        {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        },
    ]}>
        <View
            style={styles.header}>
            <MyText style={styles.headerTitle}>{configs.headerTitle}</MyText>
        </View>
        <MyButton style={styles.btnLogout} onPress={Logout}>
            {configs.btnLogout}</MyButton>
    </View>
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    header: {
        padding: 30,
        backgroundColor: '#F6F6F6',
    },
    headerTitle: {
        fontSize: 20,
        textAlign: 'center',
    },
    btnLogout: {
        width: '90%',
    },
});
