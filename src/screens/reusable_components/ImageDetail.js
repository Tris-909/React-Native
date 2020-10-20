import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200
    },
    text: {
        fontSize: 30,
        textAlign: 'center'
    },
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    likes: {
        color: 'blue'
    }
    
});

const ImageDetail = ({ title, imageUrl, likes }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{title} <Text style={styles.likes}> Likes: {likes}</Text></Text>
            
            <Image style={styles.image} source={{uri: imageUrl}} />
        </View>
    );
}

export default ImageDetail;