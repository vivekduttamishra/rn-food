import React,{useState,useEffect} from 'react';
import { render } from 'react-dom';
import {View,Text,StyleSheet} from 'react-native';
import yelp from '../api/yelp';
import RestaurantThumbnail from '../components/RestaurantThumbnail';
const styles= StyleSheet.create({
    container:{
        margin:5
    },
    loading:{
        fontSize:12,
        color:'gray',

    },
    error:{
        fontSize:40,
        color:'darkred'
    }
});

const RestaurantDetailsScreen= ({navigation})=> {
    let id=navigation.getParam('id');
    let [restaurant,setRestaurant]= useState(null);
    let [error,setError]=useState(null);
    let [loading,setLoading]=useState(true);

    const getRestaurantDetails=async ()=>{
        try{
            let response= await yelp.get(`/${id}`);
            //console.log('response',response.data);
            setRestaurant(response.data);
            //setLoading(false);
        }catch(err){
            setError(err);

        }
        setLoading(false);
    }

    useEffect(()=>{
        getRestaurantDetails();
    },[]);

    if(loading){
        return <Text style={styles.loading}>Please wait...</Text>;
    }
    if(error){
        return <Text style={styles.error}>{error.message}</Text>;
    }
    
    return (
        <View style={styles.container}>
            <RestaurantThumbnail restaurant={restaurant}/>
        </View>
    );
   
};

export default RestaurantDetailsScreen;