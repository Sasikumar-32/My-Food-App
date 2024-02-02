/*
Description:
----------------
This file defines a stack navigator for the 'HOME' tab in the React Native application. It includes screens for the home screen and food details screen.

HomeStack Component:
---------------------
1. Component Purpose:
---------------------
The HomeStack component creates a native stack navigator using '@react-navigation/native-stack'. It manages the navigation flow for the 'HOME' tab.

2. Stack Navigator:
-------------------
- The createNativeStackNavigator creates a stack navigator for managing the transition between screens within the 'HOME' tab.

HomeScreen:
------------
1. Screen Purpose:
------------------
- The 'HomeScreen' component is the initial screen for the 'HOME' tab.
- It displays a list of food items and provides a button to navigate to the 'FoodDetailScreen'.

2. Screen Options:
-------------------
- 'title': 'FOODJAIL' sets the screen title in the header.
- 'headerStyle': Sets the background color of the header.
- 'headerTintColor': Sets the color of the header text and icons.
- 'headerTitleAlign': Aligns the header title to the center.
- 'headerTitleStyle': Styles the header title with a custom font size, weight
- 'headerLeft': Provides a custom button on the left side of the header to trigger an action (not yet implemented).

FoodDetailScreen:
-------------------
1. Screen Purpose:
------------------
- The 'FoodDetailScreen' component displays detailed information about a selected food item.

2. Screen Options:
-------------------
- 'title': 'FOODJAIL' sets the screen title in the header.
- 'headerStyle': Sets the background color of the header.
- 'headerTintColor': Sets the color of the header text and icons.
- 'headerTitleAlign': Aligns the header title to the center.
- 'headerTitleStyle': Styles the header title with a custom font size, weight, and letter spacing.
- 'headerRight': Provides a custom button on the right side of the header to navigate back to the top of the stack.

Usage:
-------
- Integrate the 'Homestack' component into the 'App' component for navigation within the 'HOME' tab.
*/
import { Text,StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './homescreen/homescreen';
import Fooddetailscreen from './fooddetailscreen/fooddetailscreen';
import MuiIcon from 'react-native-vector-icons/MaterialIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    app_home_btn_text:{
      color: '#e9c46a',
      textAlign: 'center',
      textAlignVertical: 'center',
      fontSize: 16,
      borderWidth: 1,
      borderColor: '#e9c46a',
      paddingVertical: 2,
      paddingHorizontal: 8,
      borderRadius: 5,
    },
  
})

const Stack = createNativeStackNavigator()

const Homestack = () => {
  return (
  <Stack.Navigator>
    <Stack.Screen 
      name="Home" 
      component={Homescreen}
      options={{
        title:'FOODJAIL',
        headerStyle:{
          backgroundColor: '#264653',
        },
        headerTintColor:"#e9c46a",
        headerTitleAlign: 'center',
        headerTitleStyle:{
          fontSize: 30,
          fontWeight: 'bold',
          letterSpacing: 3,
        },
        headerLeft: () => (
          <Pressable >
          <Text style={styles.app_home_btn_text}><FAIcon name="hamburger" size={20} color={'#e9c46a'}/></Text>
          </Pressable>
        ),
        }
      }
    />
    <Stack.Screen 
      name='Fooddetailscreen' 
      component={Fooddetailscreen}
      options={({ navigation }) => ({
        title: 'FOODJAIL',
        headerStyle: {
          backgroundColor: '#264653',
        },
        headerTintColor: '#e9c46a',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 30,
          fontWeight: 'bold',
        },
        headerRight: () => (
          <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.app_home_btn_text}><MuiIcon name="home" size={20} color={'#e9c46a'}/></Text>
          </Pressable>
        ),
      })}
      
    />
  </Stack.Navigator>
  )
}

export default Homestack