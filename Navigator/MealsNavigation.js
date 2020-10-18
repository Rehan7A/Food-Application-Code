import React, { Children } from 'react'
import {View,Text,} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen'
import CategoriesScreen from '../screens/CategoriesScreen'
import MealDetail from '../screens/MealDetail'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen'
import Favourite from '../screens/favtScreen'
import {AntDesign, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import FilterScreen from '../screens/FilterScreen';




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator()


function Screen(props) {

   const TabChange =() =>{
    return (
        <Tab.Navigator  tabBarOptions={{
            activeTintColor: 'white',lazy:false,activeBackgroundColor:'tomato',labelStyle:{fontSize:15},showLabel:false
          }}>
            <Tab.Screen name='Categories' component={CategoriesScreen} 
            options={{
                tabBarLabel:'Home',
                tabBarIcon:()=>(<MaterialCommunityIcons name='home' color='black' size={30} />),

            }}  />
            <Tab.Screen name='favorite' component={Favourite}
             options={{
                 tabBarLabel:'Favourite',
                 tabBarIcon:()=>(<MaterialCommunityIcons name='bell' color='black' size={27} />)
            }} />
            
        </Tab.Navigator>
      )
   }
   
   const TabChange2 =()=>{
     return(
      
         <Tab.Navigator
         tabBarOptions={{
          activeTintColor: 'white',lazy:false,activeBackgroundColor:'tomato',labelStyle:{fontSize:15},
        }}
         >
           <Tab.Screen name='CategoriesMealScreen' component={CategoriesMealsScreen} 
            options={{
              tabBarLabel:'Home',
              tabBarIcon:()=>(<MaterialCommunityIcons name='home' color='black' size={27} />)
         }}
           />
           <Tab.Screen name='Favourite' component={Favourite} 
            options={{
              tabBarLabel:'Favourite',
              tabBarIcon:()=>(<MaterialCommunityIcons name='bell' color='black' size={27} />)
         }}
           />

         </Tab.Navigator>
       
     )
   }
   function getHeaderTitle(route){
     
     const routeName = getFocusedRouteNameFromRoute(route);
     

     switch (routeName) {
       case 'MealScreen':
         return 'Meal Screen';
       case 'CategoriesMealScreen':
         return 'CategoriesMealScreen';
       case 'Favourite':
         return 'Favourite';
     }
   }

   const DrawerDisplay =()=>{
     return(
     <Drawer.Navigator>
       <Drawer.Screen name='All Meals' component={TabChange} />
       <Drawer.Screen name='favourite' component={Favourite} />
       <Drawer.Screen name='Filter' component={FilterScreen}  />
     </Drawer.Navigator>
     )
   }
   
   const getInfo =(route)=>{
   var route = getFocusedRouteNameFromRoute(route)
   
    switch(route){
      case 'All Meals':
        return 'All Meals'
      case 'favourite':
        return 'favourite'
        case 'Filter':
          return 'Filter'
    }
   }
   


    return (
        <NavigationContainer>
            <Stack.Navigator mode='modal'  >
                <Stack.Screen name="Categories" component={DrawerDisplay} options={ ({route})=> ({headerTitle:getInfo(route)}) } />  
                <Stack.Screen  name="MealScreen" children={TabChange2}  options={({route}) => 
                ({headerTitle:getHeaderTitle(route)})
              } 
             
               />
                <Stack.Screen name="MealDetail" component={MealDetail} options={{...props.header,title:"Detail Meal"}} /> 
            </Stack.Navigator>
            
     </NavigationContainer>
    
    );
  }

  

export default Screen