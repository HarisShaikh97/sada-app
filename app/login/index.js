import { useState, useContext } from "react"
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet
} from "react-native"
import { useRouter } from "expo-router"
import { useFonts } from "expo-font"
import axios from "axios"
import Toast from "react-native-root-toast"
import { AppContext } from "../../context/context"
import LogoCircle from "../../components/logo-circle/LogoCircle"

export default function Page() {
	const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL

	const { dispatch } = useContext(AppContext)

	const [fontsLoaded] = useFonts({
		"Raleway-Black": require("../../assets/fonts/raleway-5/Raleway-Regular.ttf")
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
				dispatch({
					type: "SET_ACCESS_TOKEN",
					payload: res?.data?.accessToken
				})
				router?.navigate("/feeling")
			})
			?.catch((err) => {
				console.log(err)
				Toast.show(err?.response?.data?.Message || "Error!", {
					duration: 1500
				})
			})
	}

	return (
		<View style={styles.container}>
			<LogoCircle size={100} color="pink" backgroundColor="#FFE8FD" />
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
			<TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
				{fontsLoaded && (
					<Text style={styles.loginButtonText}>Login</Text>
				)}
			</TouchableOpacity>
			<View style={styles.signupTextContainer}>
				<Text style={styles.signupText}>Do not have an account?</Text>
				<TouchableOpacity
					onPress={() => {
						router?.navigate("/signup")
					}}
				>
					<Text style={styles.signupButtonText}>Signup</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		gap: 35,
		backgroundColor: "#E18CD9",
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
