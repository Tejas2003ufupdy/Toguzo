import { StyleSheet, Text, View, ScrollView,SafeAreaView,TouchableOpacity,TextInput,Pressable } from 'react-native'
import React, { useState } from 'react';
import CameraIcon from "../../assets/images/Mainpage/Camera.svg"
import PhoneIcon from "../../assets/images/Homepage/ModalScreen/Phone.svg"
import MailIcon from "../../assets/images/Homepage/ModalScreen/MailIcon.svg"
const Profilepage = () => {
  return (
    <ScrollView style={{backgroundColor:"#fff"}}>
		<SafeAreaView>
			<View style={styles.profileContainer}>
				<View style={styles.profileImage}>
					<View style={styles.initialsContainer}>
						<Text style={styles.initialsText}>KV</Text>
					</View>
					<TouchableOpacity style={styles.cameraIconContainer}>
						<CameraIcon name="camera-outline" size={24} color="black" />
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.detailsContainer}>
				<Text style={styles.textStyle}>Name</Text>
				<View style={styles.inputText}>
					<TextInput
						placeholder="kayal vizhi"
						style={{ flex: 1, fontWeight: 'normal', fontFamily: 'Nunito-Medium' }}
						placeholderTextColor={'#7C7E7E'}
					/>
				</View>
				<Text style={styles.textStyle}>Phone number</Text>
				<View style={styles.inputText}>
					<PhoneIcon style={{marginTop:5}}/>
					<TextInput
						placeholder="9356767168"
						style={{ flex: 1, fontWeight: 'normal', fontFamily: 'Nunito-Medium',paddingHorizontal:8 }}
						placeholderTextColor={'#7C7E7E'}
					/>
					<Text style={{color:"#347B72",fontSize:14,fontWeight:700,lineHeight:22}}>Edit</Text>
				</View>
				<Text style={styles.textStyle}>Email</Text>
				<View style={styles.inputText}>
					<MailIcon style={{marginTop:5}}/>
					<TextInput
						placeholder="kayalvizhi321@gmail.com"
						style={{ flex: 1, fontWeight: 'normal', fontFamily: 'Nunito-Medium',paddingHorizontal:8 }}
						placeholderTextColor={'#7C7E7E'}
					/>
					<Text style={{color:"#347B72",fontSize:14,fontWeight:700,lineHeight:22}}>Edit</Text>
				</View>

				<Pressable
					style={{
						backgroundColor: '#347B72',
						borderRadius: 10,
						padding: 12,
						alignItems: 'center',
						marginTop: 120,
						height:48
					}}
					>
					<Text style={{ color: 'white', fontWeight: 600 }}>Login</Text>
				</Pressable>
				

				
			</View>

		</SafeAreaView>
	</ScrollView>
  )
}

export default Profilepage

const styles = StyleSheet.create({
	profileContainer:{
		flex:1,
		paddingVertical:55,
		alignItems: "center",
		justifyContent:"center",
	},
	profileImage: {
		position: 'relative',
	  },
	  initialsContainer: {
		width: 128,
		height: 128,
		borderRadius: 200,
		backgroundColor: '#E0E7FF', // Light purple color
		justifyContent: 'center',
		alignItems: 'center',
	  },
	  initialsText: {
		fontSize: 36,
		color: '#6A1B9A', // Dark purple color
		fontWeight: 'bold',
	  },
	  cameraIconContainer: {
		position: 'absolute',
		alignItems:"center",
		justifyContent: "center",
		width:40,
		height:40,
		bottom: 0,
		right: 0,
		backgroundColor: 'white',
		borderRadius: 50,
		borderColor:"#CBCDCD",
		borderWidth:2,
		padding: 4,
	  },
	  detailsContainer:{
		paddingHorizontal:20,
		justifyContent:"flex-start"
	  },
	textStyle:{
		fontSize:14,
		fontStyle:"normal",
		lineHeight:20
	},
	inputText:{
		borderColor: '#CBCDCD',
		flexDirection: 'row',
		borderRadius: 8,
		borderWidth: 1,
		paddingHorizontal:14,
		paddingVertical:10,
		marginTop:6,
		marginBottom:24
		
		
	}
	  
})