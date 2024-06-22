import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import MailIcon from '../../../assets/images/Homepage/ModalScreen/MailIcon.svg'

const Accountcreate = () => {

  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "white", }}>
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 600 }}>Set up your account</Text>
        <View style={{ marginTop: 24 }}>
          <Text style={{ fontWeight: 600, fontSize: 20 }}>Gender</Text>

          <View style={styles.gender}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", borderBottomWidth: 1, borderColor: '#CBCDCD', borderWidth: 2, }}>
              <Text style={{ fontSize: 16, color: '#212121' }}>Male</Text>
            </View>
            <View style={{ borderBottomWidth: 1, borderColor: '#CBCDCD', borderWidth: 2, alignItems: "center" }}>
              <Text style={{ fontSize: 16, color: '#212121' }}>Female</Text>
            </View>
          </View>
          <View style={{ marginTop: 24 }}>
            <Text style={{ fontSize: 20, color: '#212121', fontWeight: 600 }}>What Should We Call You?</Text>
            <View style={styles.NameBar}>
              <TextInput
                placeholder="Enter Your Name"
                style={{ flex: 1, fontWeight: 'normal' }}
                placeholderTextColor={'#7C7E7E'}
              /></View>
          </View>
          <View style={{ marginTop: 24 }}>
            <Text style={{ fontSize: 20, color: '#212121', fontWeight: 600 }}>Email</Text>
            <View style={styles.NameBar}>
              <MailIcon style={{ width: 20, height: 20 }} />
              <TextInput
                placeholder="Enter Your Email"
                style={{ flex: 1, fontWeight: 'normal' }}
                placeholderTextColor={'#7C7E7E'}
              /></View>
          </View>
        </View>
        <Pressable
          style={{
            backgroundColor: '#347B72',
            borderRadius: 10,
            padding: 12,
            alignItems: 'center',
            marginTop: '100%'
          }}
          onPress={() => {
            navigation.navigate("Main");
          }}
        >
          <Text style={{ color: 'white', fontWeight: 600 }}>Create Account</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Accountcreate

const styles = StyleSheet.create({
  NameBar: {
    borderColor: '#CBCDCD',
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    marginTop: 8,
    height: 52,
    gap: 12,
  },
  gender: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 24,
    borderWidth: 2,
    gap: 20
  }
})