import {  StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import Header from '../../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import GridContainer from '../../components/GridContainer'

const courseBought = () => {
  const {text,textContainer}=styles
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
        <Text style={text}>Courses Purchased</Text>
    </SafeAreaView>
  )
}

export default courseBought

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  text:{
      textAlign:'center',
      fontSize:25,
      
  },
  textContainer:{
    
  }
})