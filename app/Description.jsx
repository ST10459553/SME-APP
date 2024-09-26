import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const Description = () => {
    const {container}=styles
  return (
<SafeAreaView style={container}>
   <Image/>
   <Text></Text>
   

</SafeAreaView>
  )
}

export default Description

const styles = StyleSheet.create({
    container:{

    }

})