import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import SearchResults from '../components/SearchResults';

const styles = StyleSheet.create({
    margin5: {
        margin: 5
    },
    error:{
        fontSize:40,
        color:'darkred'        
    }

});

const SearchScreen = (props) => {
    //Todo Init
    let [query, setQuery] = useState('');
    let [results, setResults] = useState([]);
    let [error, setError] = useState(null);

    const search = async (term) => {
        try {
            let response = await yelp.get('/search', {
                params: {
                    term,
                    location: 'san jose',
                    limit: 50
                }
            });
            console.log(response);
            setResults(response.data.businesses);
            setError(null);
        } catch (err) {
            setError(err);
            console.log(err);
        }

    }

    console.log('search screen reloaded');
    useEffect(()=>{
        search('chicken');
    },[]);

    return (
        <View style={styles.margin5}>
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