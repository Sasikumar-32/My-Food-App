/*
Description:
----------------
This file defines the 'ProfileScreen' component, which displays a welcome message with the user's name in the React Native application.

ProfileScreen Component:
---------------------
1. Component Purpose:
   - The 'ProfileScreen' component is responsible for displaying a welcome message with the user's name.
   - It receives the 'userName' parameter from the route.

2. Component Structure:
   - The component uses 'View' and 'Text' from 'react-native'.
   - Displays a welcome message with the user's name.

Usage:
-------
- Integrate the 'ProfileScreen' component into the navigation stack to display user-specific information.
*/
import { View, Text } from 'react-native'
import React from 'react'

const ProfileScreen = ({route}) => {
    const {userName} = route.params;
  return (
    <View>
      <Text style={{textAlign: 'center'}}>Welcome! {userName}</Text>
    </View>
  )
}

export default ProfileScreen