import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../theme/theme';

export const MainNavigator = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient style={styles.container} colors={theme.GRADIENT_1}>
                <View style={styles.contentContainer}>
                    <Text style={styles.textName}>Lewis Mendez</Text>
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    contentContainer: {
        justifyContent: 'flex-start',
        padding: 20
    },
    textName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.WHITE,
        marginTop: 20
    }
});
