/*
Description:
----------------
This file defines the 'SearchStack' component, which is part of the React Native application navigation. It encapsulates the navigation stack for the 'Search' feature, allowing users to search for food items.

SearchStack Component:
---------------------
1. Component Purpose:
---------------------
The 'SearchStack' component serves as the navigation stack for the 'Search' feature. It includes screens for searching and viewing detailed information about a selected food item.

2. Component Structure:
-----------------------
- The component uses the 'createNativeStackNavigator' from '@react-navigation/native-stack' to define a navigation stack.
- Two screens are included: 'Searchscreen' for searching and 'Fooddetailscreen' for displaying detailed information about a food item.

3. Styles:
----------
- Styles for this component are defined using 'StyleSheet.create' for consistent and maintainable styling.
- It includes a specific style for the home button text.

4. Navigation Options:
-----------------------
- Navigation options are defined for each screen to customize the appearance of the navigation header.
- The 'Fooddetailscreen' includes a custom header right button to navigate back to the home screen.

Usage:
-------
- Integrate the 'SearchStack' component into the main navigation container along with other navigation stacks.
*/
import { Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Searchscreen from './searchscreen';
import Fooddetailscreen from '../hometab/fooddetailscreen/fooddetailscreen';
import MuiIcon from 'react-native-vector-icons/MaterialIcons';


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

const SearchStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen 
      name="Search" 
      component={Searchscreen}
      options={{
        title:'FOODJAIL',
        headerStyle:{
          backgroundColor: '#264653',
        },
        headerTintColor:"#e9c46a",
        headerTitle:{
          letterSpacing: 3,
        },
        headerTitleAlign: 'center',
        headerTitleStyle:{
          fontSize: 30,
          fontWeight: 'bold',
          letterSpacing: 3,
        },
        }
      }
    />
    <Stack.Screen 
      name='Fooddetailscreen' 
      component={Fooddetailscreen}
      options={({navigation}) => ({
        title: 'FOODJAIL',
        headerStyle: {
          backgroundColor: '#264653',
        },
        headerTintColor: '#e9c46a',
        headerTitle: {
          letterSpacing: 3,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 30,
          fontWeight: 'bold',
        },
        headerRight: () => (
          <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.app_home_btn_text}><MuiIcon name="arrow-back" size={20} color={'#e9c46a'}/></Text>
          </Pressable>
        ),
      })}
      
    />
  </Stack.Navigator>
  )
}

export default SearchStack