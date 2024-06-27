import { useState, useContext } from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { useFonts } from "expo-font"
import axios from "axios"
import Toast from "react-native-root-toast"
import { AppContext } from "../../context/context"
import LogoCircle from "../../components/logo-circle/LogoCircle"
import NextButton from "../../components/next-button/NextButton"

export default function Page() {
	const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL

	const [fontsLoaded] = useFonts({
		"Raleway-Black": require("../../assets/fonts/raleway-5/Raleway-Regular.ttf")
	})

	const router = useRouter()

	const { state, dispatch } = useContext(AppContext)

	const [nickname, setNickname] = useState("")

	const handleNext = async () => {
		const payload = {
			fullName: state?.signupUser?.fullName,
			nickName: nickname,
			email: state?.signupUser?.email,
			password: state?.signupUser?.password
		}

		await axios
			.post(`${API_BASE_URL}/api/register`, payload)
			?.then((res) => {
				console.log(res)
				Toast.show("Signup successful!", {
					duration: 1500
				})
				dispatch({
					type: "SET_SIGNUP_USER",
					payload: null
				})
				router?.navigate("/login")
			})
			?.catch((err) => {
				console.log(err)
				Toast.show(err?.response?.data?.error || "Error!", {
					duration: 1500
				})
				dispatch({
					type: "SET_SIGNUP_USER",
					payload: null
				})
				router.navigate("/signup")
			})
	}

	return (
		<View style={styles.container}>
			<View style={styles.contentWrapper}>
				<LogoCircle size={100} color="pink" backgroundColor="#FFE8FD" />
				{fontsLoaded && (
					<Text style={styles.titleText}>Choose a Nickname</Text>
				)}
				{fontsLoaded && (
					<TextInput
						style={styles.textInput}
						value={nickname}
						onChangeText={setNickname}
						placeholder="Ali"
					/>
				)}
			</View>
			<NextButton color="#721B69" handleNext={handleNext} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-between",
		backgroundColor: "#E18CD9",
		paddingHorizontal: 25,
		paddingBottom: 50
	},
	contentWrapper: {
		flexDirection: "column",
		alignItems: "center",
		gap: 50,
		marginTop: 75
	},
	titleText: {
		fontSize: 35,
		color: "white",
		fontFamily: "Raleway-Black",
		width: "100%"
	},
	textInput: {
		height: 70,
		width: "100%",
		borderRadius: 15,
		backgroundColor: "#FFE8FD",
		fontSize: 25,
		fontFamily: "Raleway-Black",
		textAlign: "center"
	}
})
