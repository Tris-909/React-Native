import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({search, setSearch, onSubmit}) => {
    return(
        <View style={styles.background}>
            <Feather name="search" size={40} style={styles.icon} />
            <TextInput 
                value={search} 
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={setSearch} 
                style={styles.input} 
                placeholder="Search" 
                onEndEditing={onSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 15,
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center'
    },
    icon: {
        alignSelf: 'center', 
        marginRight: 10
    },
    input: {
        flex: 1
    }
});

export default SearchBar;