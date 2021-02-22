import React from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles= StyleSheet.create({
    margin5:{
        margin:5
    },
    container:{
       margin:5,
       height:50,
       backgroundColor:"#F0EEEE",
       borderRadius:10,
       flexDirection:'row'
    },
    input:{
        fontSize:25,
        paddingLeft:5,
        flex:1,
       
    },
    icon:{
        fontSize:30,
        paddingLeft:5,
        fontWeight:'bold',
        alignSelf:"center"
    }
});

const SearchBar= ({text,onChange,onSubmit})=> {
    //Todo Init
    return (
        <View style={styles.container}>
            <Ionicons 
                name="search-outline" 
                style={styles.icon} 
                color="black" 
            />

            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input} 
                placeholder="Search"
                value={text}
                onChangeText={onChange}
                onEndEditing={()=>onSubmit(text)}
            />
        </View>
    );
};

export default SearchBar;   