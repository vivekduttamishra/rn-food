import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const styles= StyleSheet.create({
    margin5:{
        margin:5
    }
});

const RestaurantDetailsScreen= (props)=> {
    //Todo Init
    return (
        <View style={styles.margin5}>
            <Text>RestaurantDetailsScreen</Text>
        </View>
    );
};

export default RestaurantDetailsScreen;