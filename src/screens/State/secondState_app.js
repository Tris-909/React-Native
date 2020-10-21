import React, {useState} from 'react';
import {Text, View, StyleSheet, Button, FlatList} from 'react-native';

const ColorSelect = () => {
    const [arrayColor, setArrayColor] = useState([]);
    
    const CreateRandomColor = () => {
        const random1 = Math.floor(Math.random()*255);
        const random2 = Math.floor(Math.random()*255);
        const random3 = Math.floor(Math.random()*255);

        let currentArrayColor = arrayColor;

        setArrayColor( [...currentArrayColor, { color: `rgb(${random1},${random2},${random3})`}] );
    }

    const renderItems = (current) => <View style={{backgroundColor: current.item.color, width: 150, height: 150, marginVertical: 8}}></View>;

    return(
        <View>
            <Text style={style.text}>Color Selector</Text>
            <Button title="Create Color" onPress={() => CreateRandomColor()}/>
            <FlatList 
                keyExtractor={(item) => item.color}
                data={arrayColor}
                renderItem={renderItems}
            />
        </View>
    )
}

const style = StyleSheet.create({
    text: {
        fontSize: 40,
        textAlign: 'center'
    }
});

export default ColorSelect;