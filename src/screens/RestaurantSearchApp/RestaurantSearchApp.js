import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SearchBar from './Search/Search';
import ResultList from './ResultList/ResultList';
import useResult from './Hook/useResult';

const RestaurantSearchApp = () => {
    const [search, setSearch] = useState('');
    const [onSubmitSearch, result, error] = useResult(); 


    return(
        <View>
            <SearchBar 
                search={search} 
                setSearch={setSearch} 
                onSubmit={() => onSubmitSearch(search)}
            />
            {result ? (
                <View style={styles.ResultView}>
                    <ResultList 
                        title="Cost Effective" 
                        listItems={result.filter((item) => item.price === '$')} 
                    />
                    <ResultList 
                        title="Bit Pricier" 
                        listItems={result.filter((item) => item.price === '$$')}
                    />
                    <ResultList 
                        title="Big Spender" 
                        listItems={result.filter((item) => item.price === '$$$')}
                    />
                </View>
            ) : null }
            {error ? <Text style={{color: 'red'}}>{error}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    ResultView: {
        marginHorizontal: 15,
        marginVertical: 15
    }
});

export default RestaurantSearchApp;