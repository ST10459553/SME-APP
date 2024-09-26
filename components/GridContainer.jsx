import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const GridContainer = (props) => {
    const {containerImg,container,img}=styles
    const {imgLink}=props

  return (
    <View style={container}>
        <View style={containerImg}>
        <Image style={img} source={imgLink}/>
        </View>
    </View>
  )
}

export default GridContainer

const styles = StyleSheet.create({
    container:{
         justifyContent:'center',
        flexDirection:'column',

    },
    containerImg:{
        width:300,
        height:170,
        borderRadius:10,
        margin:30,
    },
    img:{
        width:300,
        height:200,
        borderRadius:10,
        objectFit:'contain'
    }
})