import { useState, useEffect } from "react"
import {
	View,
	KeyboardAvoidingView,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	Platform,
	StyleSheet
} from "react-native"
import { useRouter } from "expo-router"
import { useFonts } from "expo-font"
import axios from "axios"
import Toast from "react-native-root-toast"
import { setAccessToken, getAccessToken } from "../utils/helpers"
import LogoCircle from "../components/logo-circle/LogoCircle"

export default function Page() {
	const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL

	const [fontsLoaded] = useFonts({
		"Raleway-Black": require("../assets/fonts/raleway-5/Raleway-Regular.ttf")
	})

	const router = useRouter()

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleLogin = async () => {
		const payload = {
			email: email,
			password: password
		}

		await axios
			.post(`${API_BASE_URL}/api/login`, payload)
			?.then((res) => {
				console.log(res)
				Toast.show("Login successful!", {
					duration: 1500
				})
				setAccessToken(res?.data?.accessToken)
				router?.navigate("/feeling")
			})
			?.catch((err) => {
				console.log(err)
				Toast.show(err?.response?.data?.Message || "Error!", {
					duration: 1500
				})
			})
	}

	useEffect(() => {
		;(async () => {
			await getAccessToken()
				?.then((res) => {
					if (res?.length > 0) {
						router?.navigate("/home")
					}
				})
				?.catch((err) => {
					console.log(err)
				})
		})()
	}, [])

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.layout}
		>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.container}>
					<LogoCircle
						size={100}
						color="pink"
						backgroundColor="#FFE8FD"
					/>
					{fontsLoaded && <Text style={styles.titleText}>Login</Text>}
					{fontsLoaded && (
						<TextInput
							style={styles.textInput}
							value={email}
							onChangeText={setEmail}
							placeholder="example@gmail.com"
							inputMode="email"
						/>
					)}
					{fontsLoaded && (
						<TextInput
							style={styles.textInput}
							value={password}
							onChangeText={setPassword}
							placeholder="********"
							secureTextEntry
						/>
					)}
					<TouchableOpacity
						style={styles.loginButton}
						onPress={handleLogin}
					>
						{fontsLoaded && (
							<Text style={styles.loginButtonText}>Login</Text>
						)}
					</TouchableOpacity>
					<View style={styles.signupTextContainer}>
						<Text style={styles.signupText}>
							Do not have an account?
						</Text>
						<TouchableOpacity
							onPress={() => {
								router?.navigate("/signup")
							}}
						>
							<Text style={styles.signupButtonText}>Signup</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	layout: {
		flex: 1,
		backgroundColor: "#E18CD9"
	},
	container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		gap: 35,
		paddingHorizontal: 25,
		paddingBottom: 50,
		paddingTop: 75
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
	},
	loginButton: {
		height: 50,
		width: 150,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
		backgroundColor: "#FFE8FD"
	},
	loginButtonText: {
		fontSize: 20,
		color: "black",
		fontFamily: "Raleway-Black"
	},
	signupTextContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5
	},
	signupText: {
		fontSize: 15,
		color: "black"
	},
	signupButtonText: {
		fontSize: 15,
		color: "#FFE8FD"
	}
})
