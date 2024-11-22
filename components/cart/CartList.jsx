import { FlatList, StyleSheet, Text, View, Image, Pressable, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { cart } from "../../data/cart";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
const CartList = () => {
  const { name, price, image, description, perk } = useLocalSearchParams();
  const [courses, setCourses] = useState([]);
  // const [total,setTotal]=useState()
  const loadCourses = async () => {
    try {
      const savedCourses = await AsyncStorage.getItem("courses");
      if (savedCourses !== null) {
        setCourses(JSON.parse(savedCourses));
      } else {
        setCourses([]);
      }
    } catch (error) {
      console.error("Error loading meals", error);
    }
  };

  const removeItem = async (name) => {
    try {
      const savedCourses = await AsyncStorage.getItem("courses");
      if (savedCourses !== null) {
        const parsedCourses = JSON.parse(savedCourses);
        const updatedCourses = parsedCourses.filter(
          (course) => course.name !== name
        );
        await AsyncStorage.setItem("courses", JSON.stringify(updatedCourses));
        console.log("Course removed ");
        setCourses(updatedCourses);
      }
    } catch (error) {
      console.error("Error loading course", error);
    }
  };
  const buy= async ()=>{
    const purchasedCourse={
      name,
      image,
      price,
      description,
      perk,
    };
    // const cartItems=await AsyncStorage.getItem('courses')
    // const parsedCartItems=JSON.parse(cartItems)
    const purchasedCourseExist=courses.some((course)=>course.name===name)

    if (!purchasedCourseExist){
    const purchasedCourses=[...courses,purchasedCourse]
    

    try{
      await AsyncStorage.setItem('purchased', JSON.stringify(purchasedCourses))
      console.log('saved');
      await AsyncStorage.removeItem('courses')
      setCourses([])
      }

    catch(error){'error saving course',error}
  }
  }

  const calculateTotal=(array)=>{
    let Itemtotal=0;
    array.forEach((item)=>{
      
      if(array.length==1){
        Itemtotal+=parseInt(item.price)*1.15
      }
      if(array.length==2){
        Itemtotal+=parseInt(item.price)*(1-5/100)*1.15
      }
      if(array.length==3){
        Itemtotal+=parseInt(item.price)*(1-10/100)*1.15
      }
      if(array.length>3){
        Itemtotal+=parseInt(item.price)*(1-15/100)*1.15
      }
      
    })
    
    return Itemtotal
  }

  const total=calculateTotal(courses)
  useEffect(() => {
    loadCourses();
    
    // AsyncStorage.clear('courses')
  }, []);
  useEffect(()=>{
    calculateTotal(courses)
  })
  const renderList = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image style={styles.img} source={item.image} />
        <View style={styles.verticalWrapper}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.price}>R{item.price}</Text>
          <TouchableOpacity onPress={() => removeItem(item.name)}>
          <FontAwesome name="remove" size={26} color="#910B0B" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  return ( 
  <View style={styles.wrapper}>
    <ScrollView>
    <FlatList
    
      data={courses}
      renderItem={renderList}
      keyExtractor={(item) => item.name + Math.random() * 100}
    />
    </ScrollView>
    <View style={styles.priceWrapper}>
      <Pressable style={styles.buyBtn} ><Text style={styles.btnText} onPress={buy}>Buy</Text></Pressable>
    <Text style={styles.totalPrice}>R{total.toFixed(1)}</Text></View>
    </View>
  );
};

export default CartList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    margin: 12,
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "top",
    padding: 5,
    justifyContent: "flex-start",
    borderColor: "black",
    // borderWidth: 1,
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.34,
    shadowRadius: 5.27,
    elevation: 2,
    
    gap: 5,

  },
  text: {
    fontSize: 22,
    fontWeight:'450'
  },
  price:{
    fontSize:19,
    fontWeight:'bold',
  },
  verticalWrapper:{
    gap:10
  },
  img: {
    height: 100,
    width: 100,
  },
  wrapper:{
    flexDirection:'column',
    paddingBottom:80,
  },
  priceWrapper:{
   gap:50,
   alignItems:'center',
   flexDirection:'row-reverse',
   justifyContent:'space-evenly',
   backgroundColor:'white',
  //  borderWidth:2,
   height:80,
   width:360,
   top:620,
   left:0,
   right:0,
   position:'absolute',
   shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.34,
shadowRadius: 7.27,
elevation: 15,
  },
  buyBtn:{
    backgroundColor:'#910B0B',
    paddingHorizontal:50,
    paddingVertical:12,
    borderRadius:50,
    
  },
  btnText:{
    textAlign:'center',
    fontSize:20,
    color:'white',
    border:'none'
  },
  totalPrice:{
    fontSize:30,
  }
});
