import React, {useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const Counter = () => {
    let [count, setCount] = useState(0);

    const Increment =  () => {
        setCount(count++);
    }

    const Decrement = () => {
        setCount(count--);
    }

    return(
        <View>
            <Text style={style.text}>Current Count: {count}</Text>
            <View style={style.fixToText}>
                <Button title="Decrement" onPress={Decrement} />
                <Button title="Increment" onPress={Increment} />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    text: {
        fontSize: 40
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default Counter;