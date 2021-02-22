import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';

const styles= StyleSheet.create({
    margin5:{
        margin:5
    },
    container:{
        margin:5,
        borderBottomWidth:1,
        borderBottomColor:'lightgrey'
    },
    heading:{
        fontSize:35,
        fontWeight:'bold'
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
        width:150,
        padding:5
    }
});

const HorizontalResultList= ({title,results})=> {
    
    const render=(item)=>{
        return (
            <View style={styles.listItem}>
                <Text style={styles.restaurantName}>{item.name}</Text>
                <Text style={styles.info}>{item.rating} stars, price:{item.price} </Text>
            </View>
        );
    }
    //Todo Init
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{title}</Text>
            <FlatList 
                    horizontal
                    data={results}
                    keyExtractor={item=>item.id}
                    renderItem={item=>render(item.item)}
            />
        </View>
    );
};

export default HorizontalResultList;