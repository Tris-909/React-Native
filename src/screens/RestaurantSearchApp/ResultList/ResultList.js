import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import SingleItem from './SingleItem';

const ResultList = ({ title, listItems }) => {
    if (listItems.length === 0) {
        return null;
    }

    return(
        <View style={{marginBottom: 5}}>
            <Text style={style.title}>{title}</Text>
                <FlatList 
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    keyExtractor={(restaurant) => restaurant.id}
                    data={listItems}
                    renderItem={(item, index) => {
                        const currentItem = item.item;
                        return(
                            <SingleItem item={currentItem} index={index} />
                        );
                    }}
                />

            <View style={style.separator}></View>
        </View>
    );
}

const style = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5  
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});

export default ResultList;