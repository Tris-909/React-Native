import React, {useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import Color from './thirdState_Color';

const ThirdStateApp = () => {
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);
    const ChangeValue = 10;

    const moreRed = () => {
        let currentRed = red;
        if (currentRed + ChangeValue >= 255) {
            currentRed = 255;
            setRed(currentRed);
        } else {
            currentRed = red + ChangeValue;
            setRed(currentRed);
        }
    }

    const moreBlue = () => {
        let currentBlue = blue;
        if (currentBlue + ChangeValue >= 255) {
            currentBlue = 255;
            setBlue(currentBlue);
        } else {
            currentBlue = blue + ChangeValue;
            setBlue(currentBlue);
        }
    }

    const moreGreen = () => {
        let currentGreen = green;
        if (currentGreen + ChangeValue >= 255) {
            currentGreen = 255;
            setGreen(currentGreen);
        } else {
            currentGreen = green + ChangeValue;
            setGreen(currentGreen);
        }
    }

    const lessRed = () => {
        let currentRed = red;
        if (currentRed - ChangeValue < 0) {
            currentRed = 0;
            setRed(currentRed);
        } else {
            currentRed = red - ChangeValue;
            setRed(currentRed);
        }
    }

    const lessBlue = () => {
        let currentBlue = blue;
        if (currentBlue - ChangeValue < 0) {
            currentBlue = 0;
            setBlue(currentBlue);
        } else {
            currentBlue = blue - ChangeValue;
            setBlue(currentBlue);
        }
    }

    const lessGreen = () => {
        let currentGreen = green;
        if (currentGreen - ChangeValue < 0) {
            currentGreen = 0;
            setGreen(currentGreen);
        } else {
            currentGreen = green - ChangeValue;
            setGreen(currentGreen);
        }
    }

    return(
        <View style={style.container}>
            <Text style={style.title}>Color Changer</Text>
            
            <Color 
                color='red'
                title='Red'
                less={lessRed}
                more={moreRed}
                lessTitle='Less Red'
                moreTitle='More Red'
            />

            <Color 
                color='green'
                title='Green'
                less={lessGreen}
                more={moreGreen}
                lessTitle='Less Green'
                moreTitle='More Green'
            />
            
            <Color 
                color='blue'
                title='Blue'
                less={lessBlue}
                more={moreBlue}
                lessTitle='Less Blue'
                moreTitle='More Blue'
            />

            <View style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})`, width: 250, height: 250, left: '20%', marginVertical: 15 }}></View>
            <Text style={style.result}> RGB ({red}, {green}, {blue})</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        display: 'flex',
    },
    title: {
        fontSize: 50,
        textAlign: 'center'
    },  
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    result: {
        textAlign: 'center',
        fontSize: 40,
        marginVertical: 15
    }
});

export default ThirdStateApp;