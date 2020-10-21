import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const InputTextState = () => {
    const [text, setText] = useState(''); 
    const [error, setError] = useState('');

    const changeText = (text) => {
        if (text.length <= 5) {
            setError('Your name should be longer than 5 characters');
            setText(text);
        } else {
            setError('');
            setText(text);
        }
    }

    return(
        <View>
            <TextInput 
                style={style.input} 
                value={text} 
                onChangeText={(text) => changeText(text)} 
                placeholder="Write your name in here" 
            />
            <Text style={{fontSize: 30}}>
                YourName is : {text}
            </Text>
            <Text style={{color: 'red', fontSize: 30}}>
                {error}
            </Text>
        </View>
    );
}

const style = StyleSheet.create({
    input: {
        height: 40, borderColor: 'gray', borderWidth: 1 
    }
});

export default InputTextState;