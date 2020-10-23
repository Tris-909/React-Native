import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SearchBar from './Search/Search';

const RestaurantSearchApp = () => {
    const [search, setSearch] = useState('');
    
    return(
        <View>
            <SearchBar 
                search={search} 
                setSearch={setSearch} 
                onSubmit={() => console.log('submmited')}
            />
            <Text>{search}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default RestaurantSearchApp;