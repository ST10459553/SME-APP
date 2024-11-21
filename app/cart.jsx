import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import CartList from '../components/cart/CartList';

const cart = () => {
  
  return (
   <SafeAreaView style={styles.container}>
    <CartList/>
   </SafeAreaView>
  )
}

export default cart

const styles = StyleSheet.create({
  container:{
    
  }
})