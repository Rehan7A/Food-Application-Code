import React,{useLayoutEffect} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native'
import {MealData} from '../data/dummydata'
import {MaterialIcons} from '@expo/vector-icons'
import Header from '../components/Header'

function MealDetail(props) {
    let mealid = props.route.params.mealId
    var mealItem = MealData.find((meal)=> meal.id == mealid )
    
    useLayoutEffect(()=>{
        props.navigation.setOptions({
            title:mealItem.name,
            headerStyle:{backgroundColor:'tomato'},
            headerRight:()=>(<Header/>)
            }) 
    })

    
    return (
        <View style={styles.screen}>
            <Text> {mealItem.name} </Text>
            <Button title="Go to Home Page" onPress={()=>{props.navigation.popToTop()}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default MealDetail;