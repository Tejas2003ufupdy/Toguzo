import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import promoted1 from '../../assets/promoted/promoted1.png';
import promoted2 from '../../assets/promoted/promoted2.png';
import promoted4 from '../../assets/promoted/promoted4.png';

const Promotedproducts = () => {

  let [fontsLoaded] = useFonts({
    'Nunito-SemiBold': require('../../assets/fonts/Nunito-SemiBold.ttf'),
    'Nunito-Medium': require('../../assets/fonts/Nunito-Medium.ttf'),
    'Nunito-Regular': require('../../assets/fonts/Nunito-Regular.ttf'),

  })

  const deal = [
    {
      id: '0',
      title: 'Worldwide Treats',
      des: 'Jeans large size',
      image: promoted1,

    },
    {
      id: '1',
      title: 'Trendy T-shirt',
      des: '7 colors, All Size',
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
    },
    {
      id: '4',
      title: 'Women\'s T-shirt',
      des: 'shirts of women',
      image: promoted1,

    }
  ]

  return (
    <>
      <Text style={{ fontSize: 20, fontWeight: 600, fontFamily: 'Nunito-SemiBold', margin: 20, marginBottom:10 }}>Promoted</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ margin: 10, marginTop: 5 }}>
        {deal.map((item, index) => (
          <Pressable key={index} style={{ borderColor: '#E5E6E6', margin: 10, borderWidth: 1, borderRadius: 4, justifyContent: "center", alignItems: "center", padding:4}}>
            <View style={{ justifyContent: "center", backgroundColor: 'white',  }}>
              <Image
                source={item.image}
                style={{ width: 142, height: 142, borderRadius: 4, }}
              />
              <Text numberOfLines={1} style={{ fontSize: 12, marginTop: 8, fontWeight: 600, marginLeft:10 }}>{item.title}</Text>
              <Text numberOfLines={1} style={{fontSize: 12, fontWeight: 400, color: '#7C7E7E', marginBottom:10, marginLeft:10 }}>{item.des}</Text>
            </View>
          </Pressable>
        ))}

      </ScrollView>
    </>
  )
}

export default Promotedproducts

const styles = StyleSheet.create({})