import { useState,useEffect } from 'react';
import yelp from '../api/yelp';

 export default (initTerm)=>{
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
    useEffect(()=>{
        search(initTerm);
    },[]);

    return [search, results,error];
 }