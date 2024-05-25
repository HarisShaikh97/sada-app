import {
	View,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
	StyleSheet
} from "react-native"
import { useState } from "react"
import { useFonts } from "expo-font"
import BottomNav from "../../components/bottom-nav/BottomNav"
import TherapistEmergencyPopup from "../../components/therapist-emergency-popup/TherapistEmergencyPopup"

export default function Page() {
	const [fontsLoaded] = useFonts({
		"Raleway-Black": require("../../assets/fonts/raleway-5/Raleway-Regular.ttf")
	})

	const [showPopup, setShowPopup] = useState(false)

	return (
		<View style={styles.container}>
			<TherapistEmergencyPopup
				showPopup={showPopup}
				setShowPopup={setShowPopup}
			/>
			<ScrollView style={styles.bodyScrollView}>
				<View style={styles.bodyScrollContainer}>
					{fontsLoaded && (
						<Text style={styles.titleText}>Therapist</Text>
					)}
					<View style={styles.therapistProfileContainer}>
						<View style={styles.therapistDetailsContainer}>
							<Text style={styles.therapistHeading}>
								My therapist
							</Text>
							<Text
								style={styles.therapistName}
								numberOfLines={2}
							>
								Dr. Ahmad Shahzad
							</Text>
						</View>
						<Image
							source={require("../../assets/images/profile2.png")}
							alt="profile"
							resizeMode="cover"
							style={styles.profileImage}
						/>
					</View>
					<View style={styles.nextSessionDateContainer}>
						<Text style={styles.sectionTitleText}>
							Your next therapy session
						</Text>
						<Text style={styles.textLarge}>28th March, 2021</Text>
					</View>
					<View style={styles.frequencyContainer}>
						<Text style={styles.sectionTitleText}>Frequency</Text>
						<Text style={styles.textLarge} numberOfLines={2}>
							Once every month, unless emergency
						</Text>
					</View>
					<View style={styles.buttonsWrapper}>
						<TouchableOpacity
							style={[
								styles.buttonContainer,
								styles.emergencyButton
							]}
							onPress={() => {
								setShowPopup(true)
							}}
						>
							<Text style={styles.buttonText}>Emergency</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={[
								styles.buttonContainer,
								styles.settingsButton
							]}
						>
							<Text
								style={[
									styles.buttonText,
									styles.settingsButtonText
								]}
							>
								Settings
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
			<BottomNav />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "#F4F4F4"
	},
	bodyScrollView: {
		flex: 1,
		width: "100%"
	},
	bodyScrollContainer: {
		width: "100%",
		flexDirection: "column",
		gap: 15,
		paddingTop: 75,
		paddingBottom: 50,
		paddingHorizontal: 15
	},
	titleText: {
		fontSize: 35,
		fontFamily: "Raleway-Black"
	},
	therapistProfileContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		gap: 15
	},
	profileImage: {
		height: 165,
		width: 125,
		borderRadius: 10
	},
	therapistDetailsContainer: {
		flexDirection: "column",
		gap: 10
	},
	therapistHeading: {
		fontSize: 20,
		fontWeight: "500"
	},
	therapistName: {
		fontSize: 35,
		fontWeight: "300",
		width: 175
	},
	nextSessionDateContainer: {
		width: "100%",
		flexDirection: "column",
		gap: 5
	},
	sectionTitleText: {
		fontSize: 20,
		fontWeight: "500"
	},
	textLarge: {
		fontSize: 25,
		fontWeight: "300"
	},
	frequencyContainer: {
		width: "100%",
		flexDirection: "column",
		gap: 5,
		marginTop: 25
	},
	buttonsWrapper: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		marginTop: 25
	},
	buttonContainer: {
		height: 75,
		width: 135,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center"
	},
	emergencyButton: {
		backgroundColor: "#EC9F9F"
	},
	settingsButton: {
		backgroundColor: "#D6D6D6"
	},
	settingsButtonText: {
		color: "gray"
	},
	buttonText: {
		fontSize: 20,
		fontWeight: "500"
	}
})
