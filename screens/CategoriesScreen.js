import React, { useState } from 'react';
import {Button, Text, View,StyleSheet,FlatList,TouchableOpacity} from 'react-native'
import {CATEGORIES} from "../data/dummydata"

import CategoryGrid from '../components/categoryGrid';




function CategoriesScreen(props) {
    
    const renderGridItem = (itemData)=>{
        return(
            <CategoryGrid color={itemData.item.color} id={itemData.item.id} title={itemData.item.title} propdata={props}
            />
        )
    }
    return (
        <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
       
        
    );
}



const styles = StyleSheet.create({
    
    
})

export default CategoriesScreen;
