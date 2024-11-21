import {  FlatList, StyleSheet, Text, View} from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import Header from '../../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import GridContainer from '../../components/GridContainer'
import AsyncStorage from '@react-native-async-storage/async-storage'
import CourseBoughtList from '../../components/CourseBoughtList'

const courseBought = () => {
  const {text,textContainer}=styles

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
        <Text style={text}>Courses Purchased</Text>
        <CourseBoughtList/>
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