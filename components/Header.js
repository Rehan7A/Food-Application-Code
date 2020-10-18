import React from 'react';
import {View,Text,StyleSheet} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

function Header(props) {
    return (
        <View style={{...styles.icon}}>
            <MaterialIcons name='favorite' size={30} color='black' />
        </View>
    );
}
const styles = StyleSheet.create({
    icon:{
        marginRight:20
    }
})
export default Header;