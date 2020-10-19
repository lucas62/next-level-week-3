import React from 'react'
import { View, ActivityIndicator, StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window');

export default function LoadingIndicator() {
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size={40} color="#2AB5D1" />
        </View>
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,

        height: height,
        width: width,

        justifyContent: 'center',
        alignItems: 'center',
    },
});
