/*
Description:
----------------
This file defines the 'ProfileStack' component, which is part of the React Native application navigation. It encapsulates the navigation stack for the 'Profile' feature, including screens for user details and the profile screen.

ProfileStack Component:
---------------------
1. Component Purpose:
  - The 'ProfileStack' component serves as the navigation stack for the 'Profile' feature. It includes screens for displaying user details and the profile screen.

2. Component Structure:
- The component uses 'createNativeStackNavigator' from '@react-navigation/native-stack' to define a navigation stack.
  - Two screens are included: 'UserDetail' for displaying user details and 'ProfileScreen' for the user's profile.

3.Styles:
  - Styles for this component are defined using 'StyleSheet.create' for consistent and maintainable styling.
  - It includes a specific style for the header title and the logout button.

4. Navigation Options:
  - Navigation options are defined for each screen to customize the appearance of the navigation header.
  - The 'ProfileScreen' includes a custom header right button for logout, triggering an alert for confirmation.

Usage:
-------
- Integrate the 'ProfileStack' component into the main navigation container along with other navigation stacks.
*/
import { Text, StyleSheet, Pressable, Alert } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MuiIcon from 'react-native-vector-icons/MaterialIcons';
import UserDetail from './userdetail';
import ProfileScreen from './profilescreen';


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

const ProfileStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen 
      name="UserDetail" 
      component={UserDetail}
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
      name='ProfileScreen' 
      component={ProfileScreen}
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
          <Pressable onPress={() => 
            Alert.alert(
                'Logout Confirmation',
                'Are you sure you want to logout?',
                [
                  {
                    text: 'Cancel',
                  },
                  {
                    text: 'OK',
                    onPress: () => navigation.replace('UserDetail')
                  },
                ],
            )
            }>
          <Text style={styles.app_home_btn_text}><MuiIcon name="logout" size={20} color={'#e9c46a'}/></Text>
          </Pressable>
        ),
      })}
      
    />
  </Stack.Navigator>
  )
}

export default ProfileStack