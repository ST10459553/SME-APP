import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import Grid from '../../components/Grid'

const course = () => {
  
  return (
  <SafeAreaView style={styles.container}>
    <Header/>
    <Grid courseLength={'Six Week Course'} imgLink={require('../../assets/images/week.jpg')} />
    <Grid courseLength={'Six Month Course'} imgLink={require('../../assets/images/month.jpg')}/>
  </SafeAreaView>
  )
}

export default course

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})