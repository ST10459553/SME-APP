import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
const header = (props) => {
    const {container}=styles
    const {}=props
  return (
    <View style={container}>
      <Feather name="menu" size={24} color="black" />
      
      <Ionicons name="cart-outline" size={24} color="black" />
    </View>
  )
}

export default header

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',


    }
})