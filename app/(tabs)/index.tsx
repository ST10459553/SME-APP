import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header'
import SixMonthsSectioList from '../../components/SixMonthsSectioList'
import SixWeekSectionList from'../../components/SixWeekSectionList'
const index = () => {

  const {container}=styles

  return (
    <SafeAreaView style={container}>
       <Header/>
       <ScrollView > 
    <SixMonthsSectioList horizontal={true}/>
    <SixWeekSectionList horizontal={true}/>
    </ScrollView>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  container:{
    flex:1,
  }

})
