import React from 'react';
import {View,TouchableOpacity,Text,StyleSheet,TouchableHighlight} from 'react-native'


function CategoryGrid(props) {
    
    return (
        <TouchableHighlight style={{...styles.screen,backgroundColor:props.color}}
         onPress={()=>{
         props.propdata.navigation.navigate('MealScreen',{screen:"CategoriesMealScreen",params:{categoryId:props.id } })
         
         
         }} >
            <View>
                <Text style={{...styles.textProperty}} numberOfLines={2} >{props.title} </Text>
            </View>
        </TouchableHighlight>
    );
}
const styles = StyleSheet.create({
    
    screen:{
        flex:1,
        height:200,
        margin:10,
        
        justifyContent:'flex-end',
        alignItems:'flex-end',
        padding:15,
        elevation:5,
        borderRadius:12
    },
    textProperty:{
        fontSize:20,
        fontWeight:'bold'
    }

})


export default CategoryGrid;