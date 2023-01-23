import React, { useEffect, useState } from 'react';
import {
    FlatList,
    StyleSheet,
    View,
    Dimensions
} from 'react-native';
import {
    SafeAreaProvider,
    useSafeAreaInsets,
  } from 'react-native-safe-area-context';

import MyText from '../../components/MyText';
import MyList from '../../components/MyList';

import { getNotas, insertNotas, updateNotas, deleteNotas } from '../../services/notas';
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Home({ home }) {
    const insets = useSafeAreaInsets();

    const [notas, setNotas] = useState([]);

    useEffect(() => {
        setNotas(getNotas);
    }, []);

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
