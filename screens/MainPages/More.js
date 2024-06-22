import { View, Text, SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'

const More = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <Text>More</Text>
        </View>
      </SafeAreaView>
    </>
  )
}

export default More

const styles = StyleSheet.create({
  container: { 
    paddingTop: 44,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  }
})
