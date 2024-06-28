import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import EmptyFiles from '../../../assets/images/Homepage/ErrorsFiles/EmptyFiles.svg'

const Wishlist = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.Imagecontainer}>
        <EmptyFiles
          style={styles.Container}
        />
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
        <Text style={{ fontSize: 20, fontWeight: 700, color: '#212121' }}>Your wishlist is empty</Text>
      </View>
      <View>
        <Text style={{ fontSize: 14, color: '#7C7E7E', textAlign: 'center', marginTop: 10, fontWeight: 500 }}>Save items that you like in your wishlist.</Text>
      </View>
      <View style={{ justifyContent: 'flex-end', margin: 20, flex: 1 }}>
        <Pressable
          style={{
            backgroundColor: '#347B72',
            borderRadius: 10,
            padding: 12,
            alignItems: 'center',
            marginBottom: 24
          }}
          onPress={() => {
            navigation.navigate("Main");
          }}
        >
          <Text style={{ color: 'white', fontWeight: 600 }}>Continue Shopping</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Wishlist

const styles = StyleSheet.create({
  Container: {
    height: 280,
    width: 280,
  },
  Imagecontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  }
})