import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';

import SearchResults from '../components/SearchResults';

const styles = StyleSheet.create({
    margin5: {
        margin: 5
    },
    container: {
        flex:1
    },
    error:{
        fontSize:40,
        color:'darkred'        
    }

});

const SearchScreen = (props) => {
    //Todo Init
    let [query, setQuery] = useState('');
    console.log('search screen reloaded');
    let [search,results,error] = useRestaurants('Indian');
    

    return (
        <View style={styles.container}>
            <SearchBar text={query} onChange={setQuery} onSubmit={search} />
            
            {
                error
                ? <Text style={styles.error}>Something went wrong:{error.message}</Text>
                : <SearchResults results={results} />
            }
            
        </View>
    );
};

export default SearchScreen;