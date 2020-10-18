import * as React from 'react';
import { View, Text, Button } from 'react-native';

import {CategoriesScreen} from './screens/CategoriesScreen'
import Screen from './Navigator/MealsNavigation'

 

 export default function App(){
   return(
     <Screen header={{
       title:"Category",
       headerStyle:{backgroundColor:'purple'},
       headerTintColor:'white',
       headerTitleStyle:{fontWeight:'bold'},
      }}/>
     

   )
 }
 