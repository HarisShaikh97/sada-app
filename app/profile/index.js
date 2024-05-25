import { useState } from "react"
import {
	View,
	ScrollView,
	Text,
	Image,
	TouchableOpacity,
	StyleSheet
} from "react-native"
import { useFonts } from "expo-font"
import AntDesign from "@expo/vector-icons/AntDesign"
import BottomNav from "../../components/bottom-nav/BottomNav"
import DeleteAccountPopup from "../../components/delete-account-popup/DeleteAccountPopup"

export default function Page() {
	const [fontsLoaded] = useFonts({
		"Raleway-Black": require("../../assets/fonts/raleway-5/Raleway-Regular.ttf")
	})

	const [showPopup, setShowPopup] = useState(false)

	return (
		<View style={styles.container}>
			<DeleteAccountPopup
				showPopup={showPopup}
				setShowPopup={setShowPopup}
			/>
			<ScrollView style={styles.bodyScrollView}>
				<View style={styles.bodyScrollContainer}>
					{fontsLoaded && (
						<Text style={styles.titleText}>My Profile</Text>
					)}
					<View style={styles.profileContainer}>
						<Image
							source={require("../../assets/images/profile3.png")}
							alt="profile"
							resizeMode="cover"
							style={styles.profileImage}
						/>
						<View style={styles.profileDetailsContainer}>
							<Text style={styles.profileHeadingText}>
								Nickname
							</Text>
							<Text style={styles.userNameText}>Ali</Text>
						</View>
					</View>
					<View style={styles.myJournalContainer}>
						<View style={styles.myJournalTextContainer}>
							<Text
								style={styles.myJournalText}
								numberOfLines={2}
							>
								Go to My Journal
							</Text>
						</View>
						<TouchableOpacity style={styles.myJournalNextButton}>
							<AntDesign
								name="arrowright"
								size={40}
								color="white"
							/>
						</TouchableOpacity>
					</View>
					<TouchableOpacity
						style={styles.deleteAccountButton}
						onPress={() => {
							setShowPopup(true)
						}}
					>
						<Text style={styles.deleteAccountButtonText}>
							Delete your account
						</Text>
					</TouchableOpacity>
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
		gap: 25,
		paddingTop: 75,
		paddingBottom: 50,
		paddingHorizontal: 15
	},
	titleText: {
		fontSize: 35,
		fontFamily: "Raleway-Black"
	},
	profileContainer: {
		flexDirection: "row",
		gap: 10
	},
	profileImage: {
		height: 150,
		width: 150,
		borderRadius: 15
	},
	profileDetailsContainer: {
		flexDirection: "column",
		gap: 5,
		marginTop: 15
	},
	profileHeadingText: {
		fontSize: 17.5,
		fontWeight: "500"
	},
	userNameText: {
		fontSize: 50,
		fontWeight: "300"
	},
	myJournalContainer: {
		height: 85,
		width: "100%",
		borderRadius: 32.5,
		backgroundColor: "#1A4586",
		flexDirection: "row",
		alignItems: "center"
	},
	myJournalTextContainer: {
		flex: 1,
		paddingLeft: 25,
		paddingRight: 50
	},
	myJournalText: {
		fontSize: 27.5,
		color: "white",
		fontWeight: "400"
	},
	myJournalNextButton: {
		height: "100%",
		width: 100,
		borderRadius: 32.5,
		backgroundColor: "#4482E0",
		alignItems: "center",
		justifyContent: "center"
	},
	deleteAccountButton: {
		marginTop: 150,
		alignSelf: "center"
	},
	deleteAccountButtonText: {
		fontSize: 20,
		fontWeight: "500",
		color: "#D36A6A"
	}
})
