import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ComputerScreen = () => {
    return <Text style={styles.textStyle}>Text Component In React</Text>
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default ComputerScreen;