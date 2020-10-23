import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SearchBar from './Search/Search';
import yelp from './API/Yelp';

const RestaurantSearchApp = () => {
    const [search, setSearch] = useState('');
    const [result, setResult] = useState([]);


    const onSubmitSearch = () => {
        yelp.get(`/search`, {
            params: {
                term: search,
                limit: 10,
                location: 'sydney'
            }
        }).then((result) => {
            console.log(result.data.businesses);
            setResult(result.data.businesses);
        }).then((error) => {
            console.log(error)
        });
    }

    return(
        <View>
            <SearchBar 
                search={search} 
                setSearch={setSearch} 
                onSubmit={() => onSubmitSearch()}
            />
            <Text>{search}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default RestaurantSearchApp;