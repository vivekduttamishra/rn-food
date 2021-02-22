import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import HorizontalResultList from './HorizontalResultList';
const styles= StyleSheet.create({
    margin5:{
        margin:5
    },
    container:{
        margin:5
    },
    resultCount:{
        color:'#777',
        margin:5,
        fontSize:15,
        borderBottomWidth:1,
        borderColor:'#777'
    },
    listText:{
        marginVertical:10,
        fontSize:18
    }
});

const SearchResults= ({results})=> {
    //Todo Init
    return (
        <View>
            <HorizontalResultList 
                title="Cost Effective" 
                results={results.filter(r=>r.price=="$")} />

            <HorizontalResultList 
                title="Bit Pricier" 
                results={results.filter(r=>r.price=="$$")} />

            <HorizontalResultList 
                title="Big Spender" 
                results={results.filter(r=>r.price=="$$$"||r.price==="$$$$")} />



        </View>
        
    );
};


{/* <View style={styles.margin5}>
<Text style={styles.resultCount}>Total {results.length} result(s)</Text>
<FlatList 
    data={results}
    keyExtractor={item=>item.id}
    renderItem={
        item => <Text style={styles.listText}>{item.item.name}</Text>
    }
/>
</View> */}


export default SearchResults;