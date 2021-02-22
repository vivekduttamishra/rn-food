import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const styles = StyleSheet.create({
    margin5: {
        margin: 5
    },
    container:{
        margin:5,
        width:260,
        
        borderBottomWidth:1,
        borderBottomColor:'lightgrey'
    },
    heading:{
        fontSize:20,
        fontWeight:'bold'
    },
    restaurantName:{
        fontSize:18,
        fontWeight:'bold'

    },
    info:{
        fontSize:18,
        color:'#777'
    },
    listItem:{
        width:250,
        height:200,
        padding:5,
        marginLeft:10
    },
    image:{
        width:250,
        height:120,
        borderRadius:5
    }
});

const RestaurantThumbnail = ({restaurant}) => {
    //Todo Init
    //console.log(restaurant);
    return (
        <View style={styles.listItem}>
            <Image 
                style={styles.image} 
                source={{uri:restaurant.image_url}}
                />
            <Text style={styles.restaurantName}>{restaurant.name}</Text>
            <Text style={styles.info}>{restaurant.rating} stars, price:{restaurant.price} </Text>
        </View>
    );
};

export default RestaurantThumbnail;