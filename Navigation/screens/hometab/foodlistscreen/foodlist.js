/*
Description:
----------------
This file defines the 'Foodlist' component, responsible for displaying a list of food items in the React Native application.

Foodlist Component:
---------------------
1. Component Purpose:
---------------------
The 'Foodlist' component serves as a representation of various food items in the application. It displays an array of food items with images, names, prices, and an option to view detailed price information.

2. Component Structure:
-----------------------
- The component utilizes the 'ScrollView' component to enable scrolling through the list of food items.
- Each food item is displayed within a 'View' component with specific styling.
- Styling includes the use of flex, borderRadius, borderColor, borderWidth, padding, and margin to achieve a visually appealing layout.

3. Data:
---------
- The 'foodArray' constant contains an array of food objects, each with properties like 'foodId', 'foodName', 'price', 'reviews', and 'foodImage'. This data is utilized to dynamically render the list of food items.

4. Styling:
------------
- The component defines a set of styles using 'StyleSheet.create'. These styles control the appearance of various elements, such as images, text, and buttons.

Usage:
-------
- Integrate the 'Foodlist' component into the 'Homescreen' component to display the list of food items when navigating to the 'HOME' tab.
*/
import { View, StyleSheet, Pressable, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Foodjaildetail from '../homescreen/foodjaildetail';
import MuiIcon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  fl_imgview: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    //backgroundColor: '#e9c46a',
  },
  fl_img: {
    width: "100%",
    height: 150,
    borderRadius:10,
    alignContent: 'center',
    alignSelf: 'center',
  },
  fl_img_viewstyle: {
    width: "48%",
    borderColor: '#264653',
    borderRadius: 10,
    borderWidth: .4,
    padding:10,
    gap:10,
    marginVertical:'2%',
    marginHorizontal: '1%'
  },
  fl_noimg: {
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  fl_home_btn_text: {
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
  fl_foodname_text:{
    color: '#2a9d8f',
    fontSize: 20,
    textAlign: 'center',
  },
});

const foodArray = [
    {
      foodId:1,
      foodName:'Fried rice',
      price:120.00,
      reviews:[
        {name:'Ram',review:'Absolutely delicious! Perfectly seasoned'},
        {name:'Ravi',review:'Love the texture and the flavors. A go-to comfort food.'},{name:'John',review:'Incredible variety and taste. Each dish is a delight.'},
        {name:'sasikumar',review:'The spices are just right. Non-lovers, this is a must-try!'}
      ],
      foodImage:require('../../../images/image-01.jpg'),
    },
    {
      foodId:2,
      foodName:'Non',
      price:50.00,
      reviews:[
        {name:'Diego',review:'Spice lovers, this is your paradise. Flavor explosion!'},
        {name:'Zoe',review:'The grilling brings out amazing smoky notes.'},
        {name:'Aarav',review:'Rich and flavorful. Hits the spot every time.'},
        {name:'Mia',review:'The sauce is so velvety. A comforting dish.'}
      ],
      foodImage:require('../../../images/image-02.jpg')
    },
    {
      foodId:3,
      foodName:'Mint rice',
      price:80.00,
      reviews:[
        { name: 'Liam', review: 'Absolutely delicious! A burst of flavors in every bite.' },
        { name: 'Olivia', review: 'The perfect balance of spices and tenderness. Loved it!' },
        { name: 'Noah', review: 'Mouthwatering goodness. Can\'t get enough of it!' },
        { name: 'Emma', review: 'Savory and satisfying. A true culinary delight.' },
        { name: 'Aiden', review: 'Bold and zesty. My taste buds are still dancing!' },
        { name: 'Ava', review: 'Incredible grilling technique. Unmatched smokiness.' },
      ],
      foodImage:require('../../../images/image-03.jpg')
    },
    {
      foodId:4,
      foodName:'Chicken biriyani',
      price:180.00,
      reviews:[
        { name: 'Lucas', review: 'Flavor explosion in every bite. A must-try for food enthusiasts.' },
        { name: 'Isabella', review: 'A culinary masterpiece. Exquisite and unforgettable.' },
      ],
      foodImage:require('../../../images/image-04.jpg')
    },
    {
      foodId:5,
      foodName:'Poori',
      price:50.00,
      reviews:[
        { name: 'Caden', review: 'Satisfies the cravings like no other. Pure culinary bliss.' },
        { name: 'Amelia', review: 'The richness is unparalleled. My taste buds thank you!' },
        { name: 'Mason', review: 'A symphony of flavors that lingers. Remarkable dish!' },
      ],
      foodImage:require('../../../images/image-05.jpg')
    },
    {
      foodId:6,
      foodName:'Chapati',
      price:50.00,
      reviews:[
        { name: 'Sophia', review: 'The velvety sauce is a game-changer. Comfort food at its finest.' },
        { name: 'Ethan', review: 'Perfection on a plate. A delightful culinary experience.' },
        { name: 'Harper', review: 'Spice enthusiasts, rejoice! This dish is a true paradise.' },
        { name: 'Logan', review: 'Grilling perfection. The smoky notes are a revelation.' },
        { name: 'Aria', review: 'Consistently rich and flavorful. Always hits the spot.' }
      ],
      foodImage:require('../../../images/image-06.jpg')
    },
    {
      foodId:7,
      foodName:'Dosa',
      price:60.00,
      reviews:[
        { name: 'Jackson', review: 'A gastronomic delight! Bold flavors and impeccable execution.' },
        { name: 'Sophie', review: 'Exceeds expectations every time. A culinary masterpiece.' },
        { name: 'Liam', review: 'Sensational taste journey. Pure bliss for the taste buds.' },
        { name: 'Chloe', review: 'Irresistibly delicious. A treat for the senses.' },
        { name: 'Elijah', review: 'Flavorful perfection. An absolute must-try for foodies.' },
        { name: 'Mila', review: 'The grilling technique is flawless. Smoky perfection!' },
        { name: 'Carter', review: 'A symphony of spices. Delightful and satisfying.' },
        { name: 'Grace', review: 'Tender and succulent. Leaves you craving for more.' },
      ],
      foodImage:require('../../../images/image-07.jpg')
    },
    {
      foodId:8,
      foodName:'Pizza',
      price:260.00,
      reviews:[
        { name: 'Landon', review: 'An explosion of taste in every bite. Truly impressive.' },
      ],
      foodImage:require('../../../images/image-08.jpg')
    },
    {
      foodId:9,
      foodName:'Pepper Grill',
      price:440.00,
      reviews:[
        { name: 'Lily', review: 'Velvety goodness. Comfort food elevated to new heights.' },
        { name: 'Gabriel', review: 'Unforgettable richness. A dish to remember.' },
      ],
      foodImage:require('../../../images/image-09.jpg')
    },
    {
      foodId:10,
      foodName:'Chicken Curry',
      price:120.00,
      reviews:[
        { name: 'Avery', review: 'Bold and savory. Hits all the right notes.' },
        { name: 'Evelyn', review: 'A culinary revelation. Outstanding in every aspect.' },
        { name: 'Wyatt', review: 'Satisfies even the most discerning palate. A culinary gem.' },
      ],
      foodImage:require('../../../images/image-10.jpg')
    },
    {
      foodId:11,
      foodName:'Hyderabad Biriyani',
      price:120.00,
      reviews:[
        { name: 'Zoey', review: 'Grilling perfection at its finest. Smoky and irresistible.' },
        { name: 'Owen', review: 'Consistently outstanding. The epitome of flavor.' },
        { name: 'Penelope', review: 'A velvety journey for the taste buds. Pure delight.' },
        { name: 'Grayson', review: 'Spice enthusiasts, rejoice! This dish is a flavor paradise.' },
        { name: 'Aubrey', review: 'The smoky notes are a game-changer. Exceptional grilling.' },
        { name: 'Sofia', review: 'Rich and comforting. A go-to dish for food lovers.' }
      ],
      foodImage:require('../../../images/image-11.jpg')
    },
    {
      foodId:12,
      foodName:'Chicken Leg',
      price:120.00,
      reviews:[
        { name: 'Caleb', review: 'An explosion of taste! Each bite is a journey of culinary delight.' },
        { name: 'Aurora', review: 'Exquisite and memorable. Sets a new standard for flavor.' },
      ],
      foodImage:require('../../../images/image-12.jpg')
    },
    {
      foodId:13,
      foodName:'Pan cake',
      price:250.00,
      reviews:[
        { name: 'Lincoln', review: 'Unforgettable richness. A dish that stands out in a league of its own.' },
        { name: 'Avery', review: 'Bold and savory. A feast for the taste buds.' },
      ],
      foodImage:require('../../../images/image-13.jpg')
    },
    {
      foodId:14,
      foodName:'Burger',
      price:200.00,
      reviews:[
        { name: 'Leo', review: 'Mouthwatering perfection. A culinary masterpiece every time.' },
        { name: 'Stella', review: 'Irresistibly delicious. A symphony of flavors on the palate.' },
        { name: 'Hudson', review: 'Flavorful harmony. Leaves a lasting impression with every bite.' },
        { name: 'Nova', review: 'Grilling expertise at its finest. Smoky notes are pure magic.' },
        { name: 'Mateo', review: 'A burst of spices that lingers. Culinary excellence redefined.' },
        { name: 'Aria', review: 'Tender and succulent. A true culinary indulgence.' },
        { name: 'Ezra', review: 'Each bite is a sensation. A gastronomic journey worth savoring.' },
        { name: 'Scarlett', review: 'Velvety perfection. Comfort food elevated to an art form.' },
      ],
      foodImage:require('../../../images/image-14.jpg')
    },
    {
      foodId:15,
      foodName:'Pasta',
      price:170.00,
      reviews:[
        { name: 'Santiago', review: 'Savory and satisfying. A dish that satisfies every time.' },
        { name: 'Clara', review: 'The velvety sauce is a true highlight. Comfort food at its finest.' },
        { name: 'Braxton', review: 'Flavor explosion in every bite. A must-try for food enthusiasts.' },
        { name: 'Hazel', review: 'Perfection on a plate. A delightful culinary experience awaits.' },
        { name: 'Colton', review: 'Satisfies the cravings like no other. Pure culinary bliss.' },
        { name: 'Riley', review: 'Incredible grilling technique. Unmatched smokiness that impresses.' }
      ],
      foodImage:require('../../../images/image-15.jpg')
    },
    {
      foodId:16,
      foodName:'Waffles',
      price:90.00,
      reviews:[
        { name: 'Luna', review: 'A gastronomic delight that never disappoints. Truly remarkable.' },
        { name: 'Harrison', review: 'Sensational taste journey. A symphony of flavors that captivates.' },
        { name: 'Nova', review: 'The perfect balance of spices and tenderness. A culinary triumph.' },
        { name: 'Elena', review: 'Bold and zesty. My taste buds were in for a treat.' },
      ],
      foodImage:require('../../../images/image-16.jpg')
    },
    {
      foodId:17,
      foodName:'Ice Cream',
      price:90.00,
      reviews:[
        { name: 'Adeline', review: 'The smoky notes are a game-changer. Grilling excellence.' },
        { name: 'Emmett', review: 'Rich and comforting. A go-to dish for those who appreciate flavor.' },
      ],
      foodImage:require('../../../images/image-17.jpg')
    },
    {
      foodId:18,
      foodName:'Veg rice',
      price:130.00,
      reviews:[
        { name: 'Madison', review: 'Elegance on a plate. Culinary sophistication at its best.' },
        { name: 'Elias', review: 'Consistently outstanding. A reliable choice for food enthusiasts.' },
        { name: 'Aubree', review: 'Smoky perfection. Grilling expertise that shines through.' },
        { name: 'Asher', review: 'Hits all the right notes. A delightful and satisfying experience.' },
        { name: 'Paisley', review: 'Velvety journey for the taste buds. Pure culinary pleasure.' },
        { name: 'Sawyer', review: 'Spice enthusiasts, this dish is a flavor paradise.' },
      ],
      foodImage:require('../../../images/image-18.jpg')
    },
    
];

const Foodlist = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View>
        <Foodjaildetail />
        <View style={{flexDirection:'row',flexWrap:'wrap'}}>
        {foodArray.map((item,index) => {
            return(
            <View key={index} style={styles.fl_img_viewstyle}>
              <Image 
                key={index}
                source={item.foodImage}
                resizeMode="cover"
                style={styles.fl_img}
              />
              <Text style={styles.fl_foodname_text}>{item.foodName}</Text>
              <Text style={styles.fl_foodname_text}><MuiIcon name="currency-rupee" color={'#2a9d8f'}/>{item.price}</Text>
              <Pressable onPress={() => {
                navigation.navigate('Fooddetailscreen',{
                  foodIndex:index,
                  foodArray:foodArray,
                })
              }}>
              <Text style={styles.fl_home_btn_text}>PRICE DETAIL</Text>
              </Pressable>
            </View>
          )          
        })}
        </View>
    </View>
    </ScrollView>
  );
}

export default Foodlist