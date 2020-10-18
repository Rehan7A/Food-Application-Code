import React, { useState } from 'react'
import {Text,View,Switch, StyleSheet} from 'react-native'

const FilterScreen = ()=>{

    let[isGlutenFree,setGluten] = useState(false)
    let[isLactoseFree,setLactose] = useState(false)
    let[isVegan,setVegan] = useState(false)
    let[isVegeterian,setVegeterian] =useState(false)

    const toggleValue =(value)=>{
        setGluten(value)
        
    }
    const toggleLactose =(value)=>{
        setLactose(value)
    }
    const toggleVegan =(value)=>{
        setVegan(value)
    }
    const toggleVegeterian =(value)=>{
        setVegeterian(value)
    }

    
    const Item = ()=>{
        return(
            
             <View>
                <View style={styles.container}> 
                    <Text style={styles.text} >isGlutenfree</Text>
                    <Switch value={isGlutenFree}
                        thumbColor={isGlutenFree ? 'purple' : 'white' }
                        onValueChange={toggleValue} value={isGlutenFree}
                        trackColor={{false : '',true : 'purple'}}
                      />
                </View>
                <View style={styles.container}> 
                    <Text style={styles.text} >isLactoseFree</Text>
                    <Switch value={isLactoseFree}
                        thumbColor={isLactoseFree ? 'purple' : 'white' }
                        onValueChange={toggleLactose} value={isLactoseFree}
                        trackColor={{false : '',true : 'purple'}}
                      />
                </View>
                <View style={styles.container}> 
                    <Text style={styles.text} >isGlutenfree</Text>
                    <Switch value={isVegan}
                        thumbColor={isVegan ? 'purple' : 'white' }
                        onValueChange={toggleVegan} value={isVegan}
                        trackColor={{false : '',true : 'purple'}}
                      />
                </View>
                <View style={styles.container}> 
                    <Text style={styles.text} >isVegeterianfree</Text>
                    <Switch value={isVegeterian}
                        thumbColor={isVegeterian ? 'purple' : 'white' }
                        onValueChange={toggleVegeterian} value={isVegeterian}
                        trackColor={{false : '',true : 'purple'}}
                      />
                </View>

                
            </View>  
        )
    }
    
    return(
        <View >
            <Text style={styles.mainText} > Available Filters </Text>
            <Item/>
        </View>
    )
}
const styles = StyleSheet.create({
    Mainview:{
        marginVertical:20
    },
    container:{
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       marginVertical:20,
      

    },
    text:{
        fontSize:20,
        
    },
    mainText:{
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center'
    }
    
})
export default FilterScreen