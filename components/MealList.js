import React from 'react';
import {FlatList,StyleSheet} from 'react-native'


function MealList(props) {
    
    return (
        <FlatList data={props.listData} renderItem={props.showName} style={{...styles.flatlist}} />
    );
}

const styles = StyleSheet.create({
    flatlist:{
        borderWidth:1,
        borderColor:'black'
    }
})

export default MealList;