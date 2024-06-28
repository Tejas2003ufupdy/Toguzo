import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import MailIcon from '../../../assets/images/Homepage/ModalScreen/MailIcon.svg'
import MaleIcon from '../../../assets/images/Homepage/ModalScreen/Male Icon.svg'
import FemaleIcon from '../../../assets/images/Homepage/ModalScreen/Female Icon.svg'

const Accountcreate = () => {
  const [selectgender, setSelectgender] = useState(null)
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "white", }}>
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 600 }}>Set up your account</Text>
        <View style={{ marginTop: 24 }}>
          <Text style={{ fontWeight: 600, fontSize: 20 }}>Gender</Text>

          <View style={styles.gender}>
            <Pressable style={styles.maleContain}>
              < MaleIcon />
              <Text style={{ fontSize: 16, color: '#212121', fontWeight: 600 }}>Male</Text>
            </Pressable>
            <Pressable style={styles.femalecontain}>
              < FemaleIcon />
              <Text style={{ fontSize: 16, color: '#212121', fontWeight: 600 }}>Female</Text>
            </Pressable>
          </View>
          <View style={{ marginTop: 24 }}>
            <Text style={{ fontSize: 20, color: '#212121', fontWeight: 600 }}>What Should We Call You?</Text>
            <View style={styles.NameBar}>
              <TextInput
                placeholder="Enter Your Name"
                style={{ flex: 1, fontWeight: 'normal' }}
                placeholderTextColor={'#7C7E7E'}
              />
            </View>
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
    gap: 12
  },
  gender: {
    flexDirection: 'row',
    marginTop: 24,
    gap: 16,
  },
  maleContain: {
    flexDirection: "row",
    borderColor: '#CBCDCD',
    borderWidth: 1,
    width: 167,
    height: 48,
    justifyContent: 'center',
    alignItems: "center",
    flex: 1,
    borderRadius: 10,
    gap: 8
  },
  femalecontain: {
    flexDirection: "row", 
    borderColor: '#CBCDCD', 
    borderWidth: 1, 
    alignItems: "center", 
    width: 167, 
    height: 48, 
    justifyContent: 'center', 
    flex: 1, 
    borderRadius: 10, 
    gap: 8
  }
})