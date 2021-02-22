import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import RestaurantThumbnail from './RestaurantThumbnail';

const styles= StyleSheet.create({
    margin5:{
        margin:5
    },
    container:{
       // margin:5,
      //  borderBottomWidth:1,
        borderBottomColor:'lightgrey'
    },
    heading:{
        fontSize:25,
        fontWeight:'bold',
        marginLeft:15
        
    },
    restaurantName:{
        fontSize:25,
        fontWeight:'bold'

    },
    info:{
        fontSize:18,
        color:'#777'
    },
    listItem:{
        width:270,
        padding:5
    }
});

const HorizontalResultList= ({title,results})=> {
    
    if(!results || results.length===0)
        return null;
    
    //Todo Init
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{title}</Text>
            <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={results}
                    keyExtractor={item=>item.id}
                    renderItem={({item})=>(
                        <RestaurantThumbnail 
                        restaurant={item}/>)}
            />
        </View>
    );
};

export default HorizontalResultList;