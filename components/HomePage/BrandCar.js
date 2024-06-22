import { View, Text, Image, StyleSheet,  Dimensions } from 'react-native'
import React from 'react'
import Logo from '../../assets/images/Mainpage/Logo.svg'
import VerifiedCheck from '../../assets/images/Mainpage/VerifiedCheck.svg'
import RefreshLogo from '../../assets/images/Mainpage/RefreshLogo.svg'
import PriceTag from '../../assets/images/Mainpage/PriceTag.svg'

const screenWidth = Dimensions.get('window').width
const BrandCar = () => {
  return (
    <View style={{marginTop:8, width: 442, height:148 }}> 
    {/* changes done */}
      <Image 
        source={require('../../assets/images/Mainpage/car.gif')}
        style={styles.image}
      />
      <Logo width={25} style={styles.Logocar}/>
      {/* <Logo 
      style={{position:'absolute', top: 50, left: 50, transform: [{ translateX: 32 }, { translateY: 40 }]}} /> */}
      <View style={{flexDirection: 'row', height:28, marginTop:6, }}>
        <View style={styles.BrandTop}>
          <View style={styles.BrandAssured}>
            <PriceTag width={16} />
          </View>
          <Text style={{fontSize: 8, fontWeight:700, padding: 0, width:65}}>Group buy for lowest price</Text>
        </View>
        <View style={styles.BrandTop}>
          <View style={styles.BrandAssured}>
            <VerifiedCheck width={16} />
          </View>
          <Text style={{fontSize: 8, fontWeight:700, padding: 0, width:65}}>Quality assured products</Text>
        </View>
        <View style={styles.BrandTop}>
          <View style={styles.BrandAssured}>
            <RefreshLogo width={16} />
          </View>
          <Text style={{fontSize: 8, fontWeight:700, padding: 0, width:65}}>Easy Returns & Refund</Text>
        </View>
      </View>
    </View>
  )
}

export default BrandCar

const styles = StyleSheet.create({
  BrandAssured: {
    zIndex: 10,
    width: 24,
    height: 24,
    borderRadius: 50,
    backgroundColor: '#3D8F84',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BrandTop: {
    flex: 1,
    flexDirection: 'row',
    gap:5,
    left: 30,
  },
  image: {
    width: screenWidth,
    height: screenWidth * 0.33,
    resizeMode: 'contain',
    position: 'absolute',
    //left: -(screenWidth * 0.20),
  },
  Logocar: {
    position: 'absolute',
    top: 80,
    right: screenWidth-208
    // top: 50,
    // left: 50,
    // transform: [{ translateX: 32 }, { translateY: 40 }],
  }
})
