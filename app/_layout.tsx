import { Stack } from "expo-router";
import { createStackNavigator } from '@react-navigation/stack';



export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown:false}} />
      <Stack.Screen name="SixWeekSectionListScreen"  options={{headerShown:false}} />
      <Stack.Screen name="SixMonthSectionListScreen"  options={{headerShown:false}} />
      <Stack.Screen name="Description"  options={{headerShown:true}} />
      <Stack.Screen name="cart"  options={{
        headerShown:true,
        headerTitleAlign:'center',
        headerTitleStyle:{fontSize:30,
                          fontWeight:'bold'
        },
        headerTitle:'Cart'
        }} />

    </Stack>
    

    
  );
}
