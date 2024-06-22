import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NotificationFiles from '../../../assets/images/Homepage/ErrorsFiles/NotificationFiles.svg'

const Notifications = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.Imagecontainer}>
        <NotificationFiles
          style={styles.Container}
        />
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center',marginTop: 30 }}>
        <Text style={{ fontSize: 20, fontWeight: 700, color: '#212121' }}>No Notification</Text>
      </View>
      <View>
        <Text style={{ fontSize: 14, color: '#7C7E7E', textAlign: 'center', marginTop: 10, fontWeight: 500 }}>There is no notification to show right now.</Text>
      </View>
    </View>
  )
}

export default Notifications

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