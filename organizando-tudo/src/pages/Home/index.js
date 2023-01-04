import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MyText from '../../components/MyText';

import { getNotas, insertNotas, updateNotas, deleteNotas } from '../../services/notas';
import MyList from '../../components/MyList';

export default function Home({ home }) {

    const [notas, setNotas] = useState([]);

    useEffect(() => {
        setNotas(getNotas);
    }, []);

    return <View>
        <View
            style={styles.header}>
            <MyText style={styles.headerTitle}>{home.headerTitle}</MyText>
        </View>
        <FlatList
            style={styles.body}
            data={notas}
            renderItem={({ item }) => <MyList{...item} />}
            keyExtractor={({ titulo }) => titulo}
        ></FlatList>
    </View>
}


const styles = StyleSheet.create({
    header: {
        padding: 30,
        backgroundColor: '#F6F6F6',
    },
    headerTitle: {
        fontSize: 20,
        textAlign: 'center',
    },
    body: {
        marginTop: 10,
        height: '88%'
    },
});
