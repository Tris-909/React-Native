import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';

const SingleItem = ({ item, index, navigation }) => {
    return(
        <TouchableOpacity key={index} onPress={() => navigation.navigate('Business', { id: item.id })}>
        <View style={{marginLeft: 15}}>
            <Image style={style.image} source={{uri: item.image_url}}/>
            <View>
                <Text style={style.itemTitle}>{item.name}</Text>
                <View style={style.itemSub}>
                    <Text>{item.rating} stars</Text>
                    <Text>{item.review_count} reviews</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>
        
    );
}

const style = StyleSheet.create({
    image: {
        width: '100%',
        minWidth: 270,
        height: 180,
        borderRadius: 4
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

export default withNavigation(SingleItem);