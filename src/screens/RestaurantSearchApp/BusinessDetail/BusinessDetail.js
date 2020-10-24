import React, { useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image, FlatList} from 'react-native';
import yelp from '../API/Yelp';

const Business = (props) => {
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const id = props.navigation.state.params.id;
        yelp.get(`/${id}`).then((result) => {
            console.log(result.data);
            setResult(result.data);
        }).catch((error) => {
            console.log(error);
            setError(error);
        });
    }, []);


    return(
        <View>
            { result ? (
                <>
                <Text style={style.title}>{result.name}</Text>
                <Image style={style.mainImage} source={{ uri: result.image_url }} />
                <Text style={style.phone}> 
                    <Text style={style.SubTitle}>Phone : </Text> 
                    {result.display_phone} 
                </Text>
                <Text style={style.address}> 
                    <Text style={style.SubTitle}>Location : </Text> 
                    {result.location.address1} {result.location.address2} {result.location.address3} {result.location.city} {result.location.state} {result.location.country}
                </Text>
                <Text style={style.momentTitle}> Our Moments : </Text>
                <FlatList 
                    keyExtractor={(item) => item}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={result.photos}
                    renderItem={(item, index) => {
                        return(
                        <View style={{ marginRight: 10, marginLeft: 15 }}>
                            <Image style={style.photoArray} source={{ uri: item.item }} />
                        </View>);
                    }}
                />
                </>
            ) : null }
        </View>
    );
}

const style = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: "700"
    },
    mainImage: {
        width: '90%',
        height: 200,
        marginLeft: 20,
        marginTop: 15,
        marginBottom: 20,
        marginRight: 20,
        borderRadius: 5
    },
    phone: {
        marginLeft: 20,
        fontSize: 20 
    },
    address: {
        marginLeft: 20,
        fontSize: 20 
    },
    momentTitle: {
        fontSize: 25,
        fontWeight: "700",
        marginLeft: 20,
        marginTop: 25,
        marginBottom: 20
    },
    SubTitle: {
        fontSize: 20,
        fontWeight: "700"
    },
    photoArray: {
        width: '100%',
        minWidth: 270,
        height: 180,
        borderRadius: 4,
        marginRight: 15
    }
});

export default Business;