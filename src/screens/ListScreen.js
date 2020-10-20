import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const List = () => {
    const friends = [
        {
            name: 'Name 1',
            age: '18'
        },
        {
            name: 'Name 2',
            age: '18'
        },        {
            name: 'Name 3',
            age: '18'
        },        {
            name: 'Name 4',
            age: '18'
        },        {
            name: 'Name 5',
            age: '18'
        },        {
            name: 'Name 6',
            age: '18'
        },        {
            name: 'Name 7',
            age: '18'
        },{
            name: 'Name 8',
            age: '18'
        },{
            name: 'Name 9',
            age: '18'
        },
    ]

    return(
        <FlatList 
            keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={({item}) => {
            return <Text style={styles.text}>{item.name} and {item.age}</Text>;
            }}
        />
    );
}

const styles = StyleSheet.create({
    text: {
        marginVertical: 0
    }
});

export default List;