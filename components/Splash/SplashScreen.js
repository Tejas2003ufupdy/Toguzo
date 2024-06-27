import React, { useEffect, useRef, useState } from 'react';
import { View, Animated, Image, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Blackoval from "../../assets/images/Splash/Blackoval.svg"
import Logos from "../../assets/images/Splash/Logos.svg"
import BrandName from "../../assets/images/Splash/BrandName.svg"

const SplashScreen = () => {
  const navigation = useNavigation();
  const logoHorizontalPosition = useRef(new Animated.Value(0)).current
  const logoPosition = useRef(new Animated.Value(0)).current
  const logoOpacity = useRef(new Animated.Value(0)).current
  const nameOpacity = useRef(new Animated.Value(0)).current

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Main');
    }, 2000); // 

    const animationSequence = Animated.sequence([
      Animated.timing(logoPosition, {
        toValue: 3, // top position
        duration: 400, // Time it takes to go up
        useNativeDriver: true,
      }),
      Animated.timing(logoPosition, {
        toValue: 0.5, // Assuming 0.5 represents the center position
        duration: 600, // Time it takes to come to the center
        useNativeDriver: true,
      }),
      Animated.timing(logoHorizontalPosition, { // Assuming logoHorizontalPosition controls left/right movement
        toValue: -1, // Assuming -1 represents the left position
        duration: 600, // Time it takes to move to the left
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 1, // Fade in the logo
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(nameOpacity, {
          toValue: 1, // Fade in the name
          duration: 300,
          useNativeDriver: true,
        }),
      ]),
    ])
    animationSequence.start();

    return () => clearTimeout(timer);
  }, [navigation, logoPosition, logoHorizontalPosition, logoOpacity, nameOpacity]);

  // const logoDrop = logoPosition.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [10, -50] // Start above the Blackoval and drop to its position
  // });

  return (
    <View style={styles.container}>
      <View style={styles.boxcontainer}>
        <Animated.View style={{ transform: [{ translateY: logoPosition }, { translateX: logoHorizontalPosition }] }}>
          <Logos />
        </Animated.View>
        <Animated.Text style={{ opacity: nameOpacity }}>
          <BrandName/>
        </Animated.Text>
        <Blackoval />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#347B72',

  },
  boxcontainer: {
    width: 308,
    height: 304,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default SplashScreen;