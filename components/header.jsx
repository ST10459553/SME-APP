import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';;

const Header = (props) => {
    const {container,img}=styles
    const {icon}=props
  return (
    <View style={container}>
      <Feather name="menu" size={30} color="black" />
    <Image style={img} source={require('../assets/images/logo-mo-no-bg.png')}/>
      <Ionicons name="cart-outline" size={30} color="black" />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:10,
        justifyContent:'space-between',
        alignItems:'center',
        height:60,
        marginBottom:30,


    },
    img:{
      height:100,
      width:160,
    }
})