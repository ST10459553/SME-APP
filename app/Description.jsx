import { StyleSheet, Text, View,Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams, usePathname, useRouter } from 'expo-router'
import Button from '../components/Button'
import { cart as cartData } from '../data/cart'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Description = () => {
  const { name, price, image ,description,perk} = useLocalSearchParams(); // Destructure individual parameters, used to retrieve passed paramters 
  const [courses,setCourses]=useState([])
  const {container,nameStyle,priceStyle,imageStyle,descriptionStyle,textContainer,perkStyle,purpose,namePriceView}=styles

  const loadCourse= async()=>{
    try{
      const savedCourse=await AsyncStorage.getItem('courses')
      if (savedCourse!==null){
        setCourses(JSON.parse(savedCourse))
      }
    }
    catch(error){
      console.error('Error Loading Course',error)
    }
  };

  const storeCourse=async()=>{
    const newCourse={
      name,
      image,
      price,
      description,
      perk,
    };

    const courseExist=courses.some((course)=>course.name===newCourse.name);
    if (!courseExist){
      const updatedCourse=[...courses,newCourse];
      setCourses(updatedCourse);
      try{
      await AsyncStorage.setItem('courses',JSON.stringify(updatedCourse))
      console.log('course saved ')
    }
    catch(error){
      console.error('Error Saving Course',error)
    }
    }
    else{
      console.log('Course Exist in Storage')
    }
  }



  useEffect(()=>{
    loadCourse()
  },[])


  return (
<SafeAreaView style={container}>
    <ScrollView>
   <Image style={imageStyle} source={image}/>
   <View style={namePriceView}>
   <Text style={nameStyle}>{name}</Text>
   <Text style={priceStyle}>R{price}</Text>
   </View>
   <View style={textContainer}>
   <Text style={purpose}>Purpose</Text>
   <Text style={descriptionStyle}>{description}</Text>
   <Text style={purpose}>Content</Text>
   <Text style={perkStyle}>{perk}</Text>
   <Button btnText={'Add to Cart '}  onPress={storeCourse}/>
   </View>
   </ScrollView>

</SafeAreaView>
  )
}

export default Description

const styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:'column',
      alignItems:'center',
      backgroundColor:'white',
      marginTop:-30,
    },
    imageStyle:{
      width:400,
      height:250,
    },
    nameStyle:{
      fontSize:30,
      textAlign:'left',
      marginLeft:25,
      marginTop:10,

    },
    textContainer:{
      flex:1,
      margin:10,
      flexDirection:"column",
      justifyContent:'space-around'
    },
    priceStyle:{
      textAlign:'left',
      fontWeight:'bold',
      margin:10,
      marginLeft:25,
      fontSize:25
    },
    descriptionStyle:{
      marginLeft:25,
      fontSize:20,
      // flex:1, 
      flexWrap: 'wrap',
      margin:15,

    },
    perkStyle:{
      marginLeft:25,
      fontSize:18,
      marginBottom:10,
      margin:10,
      
    },
    purpose:{
      fontSize:25,
      fontWeight:"bold",
      marginLeft:25,
      margin:10,
      
    },
    namePriceView:{
      borderBottomWidth:0,
      elevation:5,
      padding:5,
      marginTop:-10,
      
    }


})