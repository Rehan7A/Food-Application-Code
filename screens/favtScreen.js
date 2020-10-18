import React,{useLayoutEffect} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,ImageBackground} from "react-native"
import MealList from '../components/MealList'
import {MealData} from '../data/dummydata'


function Favourite(props) {
    
    let displayMeal = MealData.filter(meal =>meal.categoryid == 'c2'  )

    const favtfunc = itemData =>{
    
        return (
            <TouchableOpacity onPress={()=>{
            props.navigation.navigate({name:"MealDetail",params:{mealId: itemData.item.id }})
            }}>
            <View style={{...styles.singleView}} >
                <ImageBackground source={itemData.item.imageurl} style={{...styles.imageWidth}} >
                    <View style={{...styles.textBackground}} >
                        <Text style={{...styles.textColor}} >{itemData.item.name}</Text>
                    </View>
                    <View style={{...styles.viewData}}>
                        <Text style={{...styles.data}}>{itemData.item.duration}  </Text>
                        <Text style={{...styles.data}}>{itemData.item.affordability}  </Text>

                    </View>
                
                </ImageBackground>
                
            </View>
            </TouchableOpacity>
            )
    }
    


    return (
        <MealList listData={displayMeal} showName={favtfunc} />
    );
}
const styles = StyleSheet.create({
    viewWidth:{
        flex:1,
    },
    flatlist:{
        borderWidth:1,
        borderColor:'black'
    },
    singleView:{
        height:250,
        width:"100%",
        marginVertical:20,
        marginHorizontal:5,
        borderWidth:1,
        borderColor:'black'

    },
    imageWidth:{
        width: "100%",
        height:"100%",
        justifyContent:'flex-end'
    },
    textBackground:{
        backgroundColor:'rgba(0,0,0,0.8)',
        opacity:0.7,
        height:40,
        justifyContent:'center'
    },
    textColor:{
        color:'white',
        fontSize:20,
        textAlign:'center'
    },
    viewData:{
        flexDirection:'row',
        backgroundColor:'rgba(0,0,0,1)',
        height:40,
        justifyContent:'space-between',
        alignItems:'flex-end'
        

    },
    data:{
        color:'white',
        fontSize:18,
        
    }

})

export default Favourite;
