/*
Description:
----------------
This file defines the 'Fooddetailscreen' component, responsible for displaying detailed information about a selected food item in the React Native application.

Fooddetailscreen Component:
---------------------
1. Component Purpose:
---------------------
The 'Fooddetailscreen' component is designed to show comprehensive details about a selected food item. It includes an image, food name, price, and an option to view reviews.

2. Component Structure:
-----------------------
- The component uses a 'ScrollView' to allow vertical scrolling through the detailed information.
- The main content is organized into 'View' components with specific styles.
- The component uses 'Alert' from 'react-native' to confirm the order placement.

3. Props:
---------
- The component receives 'navigation' and 'route' as props from React Navigation to handle navigation and route parameters.

4. State:
---------
- The 'showReview' state is used to toggle the display of reviews.

5. Styles:
----------
- Styles are defined using 'StyleSheet.create' for consistent and maintainable styling.
- The component utilizes 'useMemo' to memoize the styles.

6. Methods:
-----------
- The 'Alert' component is used to confirm the order placement, providing a pop-up with 'Cancel' and 'OK' options.

Usage:
-------
- Integrate the 'Fooddetailscreen' component into the navigation stack to display detailed information about a food item.
*/
import { View, Image, StyleSheet, Pressable, Text, Alert, ScrollView, } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import MuiIcon from 'react-native-vector-icons/MaterialIcons';


const Fooddetailscreen = ({navigation,route }) => {
    //const navigation = useNavigation();
    const {foodIndex,foodArray} = route.params;
    const [showReview,setShowReview] = useState(false);

    //to update the title as foodName
    useEffect(() => {
      navigation.setOptions({
        title : foodArray[foodIndex].foodName,
      })
    },[navigation])

    const styles = useMemo(() =>(
      StyleSheet.create({
        fds_foodview: {
          flexDirection: 'column',
          gap:7,
          justifyContent: 'center',
          alignItems: 'center',
          padding:20
        },
        fds_img: {
          width: 300,
          height: 300,
          borderColor: '#264653',
          borderRadius: 10,
          borderWidth: 1,
          },
        fds_detailtext: {
          color: '#2a9d8f',
          fontSize: 25,
        },
        fds_home_btn_text: {
          color: '#264653',
          textAlign: 'center',
          textAlignVertical: 'center',
          fontSize: 16,
          borderWidth: 1,
          borderColor: '#264653',
          paddingVertical: 8,
          paddingHorizontal:15,
          borderRadius: 5,
        },
        fds_review_container: {
          display: showReview ? 'flex':'none',
          padding:10,
          flexDirection: 'column'
        },
        fds_review_view_style: {
          color: '#264653',
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: '#264653',
          paddingVertical: 8,
          paddingHorizontal:2,
        },
        fds_review_btn_text: {
          color: '#264653',
          textAlign: 'center',
          textAlignVertical: 'center',
          fontSize: 16,
        },
        fds_review_viewstyle:{
          width:'100%',
          flexDirection: 'row',
          gap:10,
          paddingVertical: 5,
          flexDirection: 'column'
        },
        fds_reviews_name_textstyle:{
          color: '#2a9d8f',
          fontSize: 20,
        },
        fds_reviews_review_textstyle:{
          color: '#264653',
          opacity:.6,
          fontSize: 18,
        }
      })
    ),[showReview])
    
  return (
    <ScrollView>
    <View style={{flex:1}}>
      <View style={styles.fds_foodview}>
        <View>
          <Image
            source={foodArray[foodIndex].foodImage}
            resizeMode="contain"
            style={styles.fds_img}
          />
        </View>
        <View>
          <View style={{flexDirection:'row',gap:10}}>
            <Text style={styles.fds_detailtext}>Food Name: </Text>
            <Text style={styles.fds_detailtext}>{foodArray[foodIndex].foodName}</Text>
          </View>
          <View style={{flexDirection:'row',gap:10}}>
            <Text style={styles.fds_detailtext}>Food Price: </Text>
            <Text style={styles.fds_detailtext}>{foodArray[foodIndex].price}.00/-</Text>
          </View>
        </View>
        <View style={{flex:1}}>
          <Pressable style={{flexDirection: 'row',gap: 20}}>
            <Text style={styles.fds_home_btn_text} onPress={() => navigation.goBack()}>BACK</Text>
            <Text style={styles.fds_home_btn_text} 
            onPress={() => {
              Alert.alert(
                'Order Confirmation',
                'Are you sure you want to place the order?',
                [
                  {
                    text: 'Cancel',
                  },
                  {
                    text: 'OK',
                    onPress: () => navigation.goBack()
                  },
                ],
              );
            }}>
            ORDER</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.fds_review_view_style}>
        <View style={{flexDirection: 'row'}} >
          <Text style={styles.fds_review_btn_text} 
            onPress={() => {
            setShowReview(preVal => !preVal)
            }}>
            REVIEWS{`(${foodArray[foodIndex].reviews.length})`} 
          </Text>
          <MuiIcon name={showReview ? 'arrow-drop-up': 'arrow-drop-down'} 
          size={30}
          color={'#2a9d8f'}
          onPress={() => {
            setShowReview(preVal => !preVal)
          }}
          />
        </View>
        <View style={styles.fds_review_container}>
          {foodArray[foodIndex].reviews.map((item,index) => 
            item?(
              <View style={styles.fds_review_viewstyle} key={index}>
                <Text style={styles.fds_reviews_name_textstyle}>{item.name}:</Text>
                <Text style={[styles.fds_reviews_review_textstyle]}>{item.review}</Text>
              </View>
            ):(<Text>no reviews yet</Text>))
          }
        </View>
      </View>
    </View>
    </ScrollView>
    
  )
}

export default Fooddetailscreen