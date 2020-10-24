import React from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';

const ResultList = ({ title, listItems }) => {
    if (listItems.length === 0) {
        return null;
    }
    
    
    return(
        <View>
            <Text style={style.title}>{title}</Text>
                <FlatList 
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    keyExtractor={(restaurant) => restaurant.id}
                    data={listItems}
                    renderItem={(item, index) => {
                        const Singleitem = item.item;
                        return(
                            <View key={index} style={{marginLeft: 15}}>
                                <Image style={style.image} source={{uri: Singleitem.image_url}}/>
                                <View>
                                    <Text style={style.itemTitle}>{Singleitem.name}</Text>
                                    <View style={style.itemSub}>
                                        <Text>{Singleitem.rating} stars</Text>
                                        <Text>{Singleitem.review_count} reviews</Text>
                                    </View>
                                </View>
                            </View>
                        );
                    }}
                />

            <View style={style.separator}></View>
        </View>
    );
}

const style = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold"  
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    image: {
        width: 270,
        height: 180
    },
    itemTitle: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    itemView: {
        display: 'flex',
        flexDirection: 'row'
    },
    itemSub: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default ResultList;