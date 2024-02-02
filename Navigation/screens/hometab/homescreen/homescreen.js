/*
Description:
----------------
This file defines the 'Homescreen' component, which represents the main screen for the 'HOME' tab in the React Native application. It primarily consists of the 'Foodlist' component to display a list of food items.

Homescreen Component:
---------------------
1. Component Purpose:
---------------------
The 'Homescreen' component serves as the initial screen for the 'HOME' tab, displaying a list of food items.

2. Structure:
--------------
- It is a functional component that renders a 'View' component with flex 1, allowing it to occupy the entire screen.
- The primary content is rendered by the 'Foodlist' component, which is imported and included in the 'View'.

Foodlist Component:
--------------------
1. Component Purpose:
---------------------
- The 'Homescreen' component leverages the 'Foodlist' component to display a list of food items.

Usage:
-------
- Integrate the 'Homescreen' component into the 'Homestack' component for navigation within the 'HOME' tab.
*/
import { View,} from 'react-native'
import React from 'react'
import Foodlist from '../foodlistscreen/foodlist'

const Homescreen = () => {
  return (
    <View style={{flex:1}}>
      <Foodlist />
    </View>
  )
}

export default Homescreen