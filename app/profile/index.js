import { useState, useEffect, useContext } from "react"
import {
	View,
	ScrollView,
	Text,
	Image,
	TouchableOpacity,
	StyleSheet
} from "react-native"
import { useFonts } from "expo-font"
import axios from "axios"
import { AppContext } from "../../context/context"
import { getAccessToken, deleteAccessToken } from "../../utils/helpers"
import BottomNav from "../../components/bottom-nav/BottomNav"
import DeleteAccountPopup from "../../components/delete-account-popup/DeleteAccountPopup"
import { router } from "expo-router"

export default function Page() {
	const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL

	const { state, dispatch } = useContext(AppContext)

	const [fontsLoaded] = useFonts({
		"Raleway-Black": require("../../assets/fonts/raleway-5/Raleway-Regular.ttf")
	})

	const [showPopup, setShowPopup] = useState(false)
	const [user, setUser] = useState()
	const [accessToken, setAccessToken] = useState("")

	useEffect(() => {
		;(async () => {
			if (accessToken?.length > 0) {
				await axios
					.get(`${API_BASE_URL}/api/user?accessToken=${accessToken}`)
					?.then((res) => {
						console.log(res)
						setUser(res?.data?.data)
					})
					?.catch((err) => {
						console.log(err)
					})
			} else {
				await getAccessToken()
					?.then((res) => {
						console.log(res)
						setAccessToken(res)
					})
					?.catch((err) => {
						console.log(err)
					})
			}
		})()
	}, [accessToken])

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
							<Text style={styles.userNameText}>
								{user?.nickName}
							</Text>
							<Text style={styles.emailText}>{user?.email}</Text>
						</View>
					</View>
					<Text style={styles.fullNameText}>{user?.fullName}</Text>
					{fontsLoaded && (
						<Text style={styles.feelingsTitleText}>Feelings</Text>
					)}
					<View style={styles.feelingsWrapper}>
						{user?.feeling?.map((item, key) => {
							return (
								<View style={styles.feelingsPill} key={key}>
									<Text style={styles.feelingsText}>
										{item}
									</Text>
								</View>
							)
						})}
					</View>
					<TouchableOpacity
						style={styles.deleteAccountButton}
						onPress={() => {
							setShowPopup(true)
						}}
					>
						<Text style={styles.buttonText}>
							Delete your account
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.logoutButton}
						onPress={async () => {
							await deleteAccessToken()
							router?.replace("/")
						}}
					>
						<Text style={styles.buttonText}>Logout</Text>
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
	emailText: {
		fontSize: 15,
		fontWeight: "300"
	},
	fullNameText: {
		fontSize: 50,
		fontWeight: "300"
	},
	feelingsTitleText: {
		fontSize: 25,
		fontFamily: "Raleway-Black"
	},
	feelingsWrapper: {
		flexDirection: "row",
		gap: 10,
		flexWrap: "wrap"
	},
	feelingsPill: {
		height: 25,
		paddingHorizontal: 5,
		borderRadius: 15,
		backgroundColor: "#8FC9FF",
		justifyContent: "center"
	},
	feelingsText: {
		color: "white",
		fontWeight: "500"
	},
	deleteAccountButton: {
		marginTop: 25,
		alignSelf: "center"
	},
	logoutButton: {
		alignSelf: "center"
	},
	buttonText: {
		fontSize: 20,
		fontWeight: "500",
		color: "#D36A6A"
	}
})
