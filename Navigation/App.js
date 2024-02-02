/*
/*
Description:
----------------
This file serves as the main entry point for a React Native application implementing a bottom tab navigation structure.

App Component:
--------------
1. Component Purpose:
---------------------
The App component defines the main structure of the application using a bottom tab navigator.

2. Navigation Container:
------------------------
- The component wraps the entire application in a NavigationContainer from '@react-navigation/native', providing navigation context.

3. Bottom Tab Navigator:
------------------------
- The createBottomTabNavigator creates a bottom tab navigation with three tabs: HOME, SEARCH, and PROFILE.

4. Tab Options:
----------------
- The 'screenOptions' prop configures the appearance of the bottom tab bar.
  - 'tabBarShowLabel': false hides tab bar labels.
  - 'tabBarActiveTintColor': '#2a9d8f' sets the active tab icon color.
  - 'tabBarInactiveTintColor': 'black' sets the inactive tab icon color.
  - 'tabBarActiveBackgroundColor': '#264653' sets the active tab background color.

5. Tab Screens:
---------------
- 'HOME' tab is associated with the 'Homestack' component.
  - It includes a custom icon using MuiIcon ('home' icon).
  - The header is hidden using 'headerShown: false'.

- 'SEARCH' tab is associated with the 'Searchstack' component.
  - It includes a custom icon using MuiIcon ('search' icon).
  - The header is hidden using 'headerShown: false'.

- 'PROFILE' tab is associated with the 'ProfileStack' component.
  - It includes a custom icon using MuiIcon ('account-circle' icon).
  - The header is hidden using 'headerShown: false'.

*/

import React from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homestack from './screens/hometab/homestack';
import MuiIcon from 'react-native-vector-icons/MaterialIcons';
import SearchStack from './screens/searchtab/searchstack';
import ProfileStack from './screens/profiletab/profilestack';

const Tab = createBottomTabNavigator()

function App(){
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          //tabBarLabelPosition:'beside-icon' || 'below-icon'
          tabBarShowLabel: false, // Hide tab bar labels
          tabBarActiveTintColor: '#2a9d8f', // Active tab icon color
          tabBarInactiveTintColor: 'black', // Inactive tab icon color
          tabBarActiveBackgroundColor: '#264653', // Active tab background color
        }
        }
      >
        <Tab.Screen 
          name='HOME' 
          component={Homestack}
          options={{
            tabBarLabel:'HOME',
            headerShown:false,
            tabBarIcon: () => (<MuiIcon name="home" size={20} color={'#2a9d8f'}/>)
          }}
        />
        <Tab.Screen 
          name='Searchscreen' 
          component={SearchStack}
          options={{
            tabBarLabel:'SEARCH',
            headerShown: false,
            tabBarIcon: () => (<MuiIcon name="search" size={20} color={'#2a9d8f'}/>)
          }}
        />
        <Tab.Screen 
          name='ProfileStack' 
          component={ProfileStack}
          options={() => ({
          tabBarLabel: 'PROFILE',
          headerShown: false,
          tabBarIcon: () => (<MuiIcon name="account-circle" size={20} color={'#2a9d8f'}/>)
        })}
        /> 
      </Tab.Navigator>
    </NavigationContainer>
  );
}



export default App;
