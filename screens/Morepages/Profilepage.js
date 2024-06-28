import { StyleSheet, Text, View, ScrollView,SafeAreaView } from 'react-native'
import React, { useState } from 'react';
import CameraIcon from "../../assets/images/Mainpage/Camera.svg"
const Profilepage = () => {
  return (
    <ScrollView style={{backgroundColor:"#fff"}}>
		<SafeAreaView>
			<View style={styles.profileContainer}>
				<View style={styles.cameraCont}>
					<View style={styles.imageContainer}>
						<Text style={{fontSize:48,fontWeight:600,color:"#6938EF"}}>KV</Text>
					</View>
					<View style={{padding:4,borderColor:"#CBCDCD",borderWidth:2,borderRadius:20}}>
						<CameraIcon/>
					</View>
				</View>
				
					

			</View>
		</SafeAreaView>
	</ScrollView>
  )
}

export default Profilepage

const styles = StyleSheet.create({
	profileContainer:{
		paddingVertical:108,
		alignItems: "center",
		justifyContent:"center",
		

	},
	imageContainer:{
		backgroundColor:"#D9D6FE",
		width:128,
		height:128,
		borderRadius:200,
		alignItems:"center",
		justifyContent:"center",
	},
	cameraCont:{
		display:"flex",
		flexDirection:"column",
		justifyContent:"flex-end",
		alignItems:"flex-end",
	},
})