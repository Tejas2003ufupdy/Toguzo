import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import promoted1 from '../../assets/promoted/promoted1.png'; 
import promoted2 from '../../assets/promoted/promoted2.png'; 
import promoted4 from '../../assets/promoted/promoted4.png'; 

const Promotedproducts = () => {

  const deal = [
    {
      id: '0',
      title: 'Worldwide Treats',
      des: 'All Types of Grocery',
      image: promoted1,
      
    },
    {
      id: '1',
      title: 'Trendy T-shirt',
      des: '7, colors all size',
      image: promoted2,
    },
    {
      id: '2',
      title: 'Women\'s T-shirt',
      des: 'shirts of women',
      image: promoted4,
    },
    {
      id: '3',
      title: 'Women\'s T-shirt',
      des: 'shirts of women',
      image: promoted1,
    }
  ]

  return (
    <View>
      <Text>Promotedproducts</Text>
    </View>
  )
}

export default Promotedproducts

const styles = StyleSheet.create({})