import React, {useReducer} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const reducer = (state, action) => {
    switch(action.type) {
        case 'INCREMENT':
            const newIncrement = state.count + 1;
            return { ...state, count: newIncrement}
        case 'DECREMENT':
            const newDecrement = state.count - 1;
            return { ...state, count: newDecrement}
        default: 
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });    

    return(
        <View>
            <Text style={style.text}>Current Count: {state.count}</Text>
            <View style={style.fixToText}>
                <Button title="Decrement" onPress={() => dispatch({type: 'DECREMENT'})} />
                <Button title="Increment" onPress={() => dispatch({type: 'INCREMENT'})} />
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