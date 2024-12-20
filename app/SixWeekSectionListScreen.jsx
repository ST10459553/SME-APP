import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SixMonthsSectioList from '../components/SixMonthsSectioList'
import SixWeekSectionList from'../components/SixWeekSectionList'
import Header from '../components/Header'



const SixWeekSectionListScreen = () => {

    const {container}=styles
    
  return (
  <SafeAreaView style={container}>
    <Header/>
      <SixWeekSectionList horizontal={false} />
  </SafeAreaView>
  )
}

export default SixWeekSectionListScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})