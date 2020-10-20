import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from './ImageDetail';

const ImageScreen = () => {
    return(
        <View>
            <Text style={styles.text}>ImageScreen</Text>
            <ImageDetail 
                title="Image Tris" 
                likes="15"
                imageUrl="https://cdn.pixabay.com/photo/2016/08/09/21/54/yellowstone-national-park-1581879_1280.jpg" />
            <ImageDetail 
                title="Image2 from Tri"
                likes="19"
                imageUrl="https://images.squarespace-cdn.com/content/v1/5a5906400abd0406785519dd/1547305833918-3GKETBUWRDXCEC6P5C2N/ke17ZwdGBToddI8pDm48kKAwwdAfKsTlKsCcElEApLR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UegTYNQkRo-Jk4EWsyBNhwKrKLo5CceA1-Tdpfgyxoog5ck0MD3_q0rY3jFJjjoLbQ/yenyi.jpg" />
            <ImageDetail 
                title="Last Image"
                likes="63"
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgtYdPpgOquAVSnyKJpDVGVlQhj_cdBvyLdw&usqp=CAU" />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center'
    }
});

export default ImageScreen;