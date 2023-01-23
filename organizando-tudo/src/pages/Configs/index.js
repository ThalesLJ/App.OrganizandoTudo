import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';

import { useSafeAreaInsets, } from 'react-native-safe-area-context';

import MyText from '../../components/MyText';

import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Configs({ configs }) {
    const insets = useSafeAreaInsets();

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
});
