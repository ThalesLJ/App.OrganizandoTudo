import { Montserrat_100Thin } from '@expo-google-fonts/montserrat';
import React, { useEffect, useState } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View
} from 'react-native';

import { Feather } from 'react-native-vector-icons';

import MyText from './MyText';

export default function MyList({ titulo, nota, children, style }) {

    const [previa, setPrevia] = useState('');

    useEffect(() => {
        const aux = nota.slice(0, 20);

        if (aux.length == 20) {
            setPrevia(aux + "...");
        } else {
            setPrevia(aux);
        }

    }, []);

    return <View style={styles.container}>

        <MyText style={styles.titulo}>
            {titulo}</MyText>
        <MyText style={styles.previa}>
            {previa}</MyText>

        <View style={styles.optionBar}>
            <TouchableOpacity>
                <Feather
                    name='copy' color='#35C0ED' size={20}>
                </Feather>
            </TouchableOpacity>

            <TouchableOpacity>
                <Feather
                    name='x' color='red' size={25}>
                </Feather>
            </TouchableOpacity>
        </View>

    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        elevation: 4
    },
    titulo: {
        fontSize: 20,
        color: '#35C0ED',
        fontWeight: 'bold',
    },
    previa: {
        fontSize: 10,
        marginTop: 15
    },
    optionBar: {
        flex: 1,
        justifyContent: "flex-end",
        flexDirection: "row",
    }
});
