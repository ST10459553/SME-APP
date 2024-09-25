import { Stack,Tabs

 } from "expo-router";
 import AntDesign from '@expo/vector-icons/AntDesign';
 import Feather from '@expo/vector-icons/Feather';
 import Entypo from '@expo/vector-icons/Entypo';
 import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function RootLayout() {
  return (
    <Tabs screenOptions={{  
      headerShown:false,
      tabBarInactiveTintColor:'grey',
      tabBarActiveTintColor:'#910B0B',
      tabBarLabelStyle:{display:"none"}
      }}>
    <Tabs.Screen name="index" options={{tabBarIcon:({focused})=>(<AntDesign name="home" size={24} color={focused?'#910B0B':'grey'}/>)}}/>

    <Tabs.Screen name="course"options={{tabBarIcon:({focused})=>(<Feather name="book" size={24} color={focused?'#910B0B':'grey'}/>)}}/>

    <Tabs.Screen name="courseBought" options={{tabBarIcon:({focused})=>(
      <AntDesign name="book" size={24} color={focused?'#910B0B':'grey'}/>
    )}}/>
    <Tabs.Screen name="help" options={{tabBarIcon:({focused})=>(
      <MaterialIcons name="help" size={24} color={focused?'#910B0B':'grey'}/>
    )}}/>
  

    </Tabs>
  );
}
