import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


const Button = (props) => {
    const {container, button, text}=styles
    const {btnText}=props
  return (
    <View style={container}>
        <Link href={'https://maps.app.goo.gl/xKudrrHdebmy81u98'} asChild>
        <TouchableOpacity style={button}><Text style={text}>{btnText}</Text></TouchableOpacity></Link>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        margin:15,
    },
    button:{
        backgroundColor:'#910B0B',
        padding:10,
        borderRadius:35
    },
    text:{
        fontSize:22,
        color:'white'

    }
})