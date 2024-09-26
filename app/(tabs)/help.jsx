import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import GridContainer from '../../components/GridContainer'
import Button from '../../components/Button'



const help = () => {
  const {container,text}=styles
  return (
   <SafeAreaView style={container}>
    <Header/>
    <Text style={text} >Where To Find Us</Text>
    <GridContainer imgLink={require('../../assets/images/office.jpg')} />
    <Button btnText={'Get Directions'}/>
   </SafeAreaView>
  )
}

export default help

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  text:{
    textAlign:'center',
    fontSize:30,

  }
})