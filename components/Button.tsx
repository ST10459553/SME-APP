import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

    interface ButtonProps{
    btnText:String,
    link?:any,
    onPress?:()=>void
    }
const Button = (props:ButtonProps) => {
    const {container, button, text}=styles
    const {link,onPress,btnText}=props

    return (
        <View style={container}>
          {link ? (
            // If 'link' is provided, use Link component for navigation
            <Link href={link} asChild>
              <TouchableOpacity style={button}>
                <Text style={text}>{btnText}</Text>
              </TouchableOpacity>
            </Link>
          ) : (
            // If 'link' is not provided, just use TouchableOpacity for onPress
            <TouchableOpacity onPress={onPress} style={button}>
              <Text style={text}>{btnText}</Text>
            </TouchableOpacity>
          )}
        </View>
      );
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
        paddingHorizontal:35,
        borderRadius:35
    },
    text:{
        fontSize:22,
        color:'white'

    }
})