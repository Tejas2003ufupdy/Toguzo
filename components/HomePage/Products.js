import { Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import favicon from '../../assets/favicon.png'


const Products = () => {
  const list = [
    {
      id: "0",
      img: favicon,
      name: "Grocery"
    },
    {
      id: "1",
      img: favicon,
      name: "Fashion"
    },
    {
      id: "2",
      img: favicon,
      name: "Beauty & personal care"
    },
    {
      id: "3",
      img: favicon,
      name: " Home & decor"
    },
    {
      id: "4",
      img: favicon,
      name: "Sports & Fitness"
    },
    {
      id: "5",
      img: favicon,
      name: "Fashion"
    },
    {
      id: "6",
      img: favicon,
      name: "Beauty & personal care"
    },
    {
      id: "7",
      img: favicon,
      name: " Home & decor"
    },
    {
      id: "8",
      img: favicon,
      name: "Grocery"
    },
  ]

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.Products}>
        {list.map((item, index) => (
          <Pressable key={index} style={{marginLeft: 20, justifyContent:'center', alignItems:'center', width: 60, height:82}}>
            <View >
              <Image source={item.img} 
              style={styles.productview}/>
            </View>
            <Text numberOfLines={1} style={{textAlign:'center', fontSize: 12, fontWeight: 600, marginTop: 1}}>{item.name}</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  )
}

export default Products

const styles = StyleSheet.create({
  Products: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 98,
    flexDirection: 'row',  
  },
  productview: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 0,
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#CBCDCD',
  },
  ProductImage: {
    borderRadius: 50,
    height: 25,
    width: 25,
    flexDirection: 'row'
  }
})