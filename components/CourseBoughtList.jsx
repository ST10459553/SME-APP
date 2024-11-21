import { FlatList, StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const CourseBoughtList = () => {
  const [purchased,setPurchased]=useState([])
  const loadItems=async()=>{
    try{
    const purchasedCourse= await AsyncStorage.getItem('purchased')
    if(purchasedCourse!==null){
      // console.log(purchased)
    setPurchased(JSON.parse(purchasedCourse))
    // 
    }
    else{
      setPurchased([])
    }
    }
    catch(error){
    console.log('error loading ',error);
    
    }
  }
  useEffect(()=>{
    loadItems()
    // AsyncStorage.removeItem('purchased')
  },[purchased])
  const renderItem=({item})=>(
    <View style={styles.container}>
    <View style={styles.itemContainer}>
    <Image style={styles.image} source={item.image}/>
    <Text>{item.name}jo</Text>
    </View>
    </View>
  )
  return (
    <View>
      <FlatList
      renderItem={renderItem}
      data={purchased}
      keyExtractor={(item)=>{item.name+Math.random()*100}}
      />
      
    </View>
  )
}

export default CourseBoughtList

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center'
  },
  itemContainer:{
    
  },
  image:{
    height:200
  }
})