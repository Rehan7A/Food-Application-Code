import React, { useEffect, useState,useLayoutEffect } from 'react';
import {Text, View,StyleSheet, Button,FlatList} from 'react-native'

import {CATEGORIES,MealData} from '../data/dummydata'
import Category from '../models/category';
import Mealitem from '../components/Mealitem'
import CategoriesScreen from './CategoriesScreen';



const CategoriesMealsScreen =(props)=> {
    
     let titleValue = CATEGORIES.find(cat => cat.id== props.route.params.categoryId )
     let title = titleValue
     
     
    return(
        <Mealitem navigation={props.navigation} selectedcategory={title} />
       
     )
}     











export default CategoriesMealsScreen;
