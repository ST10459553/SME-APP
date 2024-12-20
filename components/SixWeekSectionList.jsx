import { StyleSheet, Text, View,Image,SectionList,FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { sixMonthCourse } from '../data/sixMonthCourse'
import {sixWeekCourse} from '../data/sixWeekCourse'
import { useRouter } from 'expo-router'


const SixWeekSectionList = (props) => {
    const {courseImg,container,courseName,coursePrice,sectionHeader,infoWrapper}=styles
    const {horizontal}=props
    const router=useRouter()
    const renderItem=({item})=>(
        <View style={container}>
            <TouchableOpacity onPress={()=>
                router.push({
                    pathname:'/Description',
                    params:{
                        name:item.name,
                        price :item.price,
                        image:item.image,
                        description:item.description,
                        perk:item.perk
                    }
                })
            }>
            <Image style={courseImg} source={item.image}/>
            <View style={infoWrapper}>
            <Text style={courseName}>{item.name}</Text>
            <Text style={coursePrice}>R{item.price}</Text>   
            </View>
            </TouchableOpacity>
        </View>
    )


  return (
    <View>
    <Text style={sectionHeader}>Six Week Course</Text>
    <FlatList
    renderItem={renderItem}
    data={sixWeekCourse}
    horizontal={horizontal}
    showsHorizontalScrollIndicator={false}
    keyExtractor={(item) => item.id.toString()} 
    />
    </View>
  )
}


export default SixWeekSectionList

const styles = StyleSheet.create({
    container:{
        
        alignItems:'center',
        flexDirection:'column',
        margin:10,
    },
    courseImg:{
        width: 300,
        height: 180,
        borderRadius:15,
        // marginRight:5,
        marginLeft:10,
        


    },
    courseName:{
        color:'white',
        fontSize:20,
    },
    coursePrice:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
    },
    sectionHeader:{
        fontSize:25,
        padding:10,
        marginLeft:5,
        textAlign:'center'

        
    },
    infoWrapper:{
        position:'absolute',
        color:'white',
        top:90,
        left:50,

    }


})