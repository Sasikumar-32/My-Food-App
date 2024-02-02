import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    fjd_viewcontainer: {
      flex:1,
      //backgroundColor: '#e9c46a',
      justifyContent:'center',
      alignItems:'center',
      paddingVertical:30,
    },
    fjd_captionstyle :{
      color: '#2a9d8f',
      fontSize: 27,
      textAlign: 'center',
      fontWeight: 'bold'
    },
})
const Foodjaildetail = () => {
  return (
    <View style={styles.fjd_viewcontainer}>
      <Text style={styles.fjd_captionstyle}>FoodJail Brings the Feast to You.</Text>
    </View>
  )
}

export default Foodjaildetail