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
import { AppContext } from "../../context/context"
import LogoCircle from "../../components/logo-circle/LogoCircle"

export default function Page() {
	const [fontsLoaded] = useFonts({
		"Raleway-Black": require("../../assets/fonts/raleway-5/Raleway-Regular.ttf")
	})

	const { dispatch } = useContext(AppContext)

	const router = useRouter()

	const [fullName, setFullName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleNext = () => {
		const payload = {
			fullName: fullName,
			email: email,
			password: password
		}
		dispatch({
			type: "SET_SIGNUP_USER",
			payload: payload
		})
		router?.navigate("/nickname")
	}

	return (
		<View style={styles.container}>
			<LogoCircle size={100} color="purple" backgroundColor="#EEE5FF" />
			{fontsLoaded && <Text style={styles.titleText}>Signup</Text>}
			{fontsLoaded && (
				<TextInput
					style={styles.textInput}
					value={fullName}
					onChangeText={setFullName}
					placeholder="John Doe"
				/>
			)}
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
			<TouchableOpacity style={styles.signupButton} onPress={handleNext}>
				{fontsLoaded && (
					<Text style={styles.signupButtonText}>Signup</Text>
				)}
			</TouchableOpacity>
			<View style={styles.loginTextContainer}>
				<Text style={styles.loginText}>Already have an account?</Text>
				<TouchableOpacity
					onPress={() => {
						router?.navigate("/")
					}}
				>
					<Text style={styles.loginButtonText}>Login</Text>
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
		backgroundColor: "#9973E9",
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
		backgroundColor: "#EEE5FF",
		fontSize: 25,
		fontFamily: "Raleway-Black",
		textAlign: "center"
	},
	signupButton: {
		height: 50,
		width: 150,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
		backgroundColor: "#EEE5FF"
	},
	signupButtonText: {
		fontSize: 20,
		color: "black",
		fontFamily: "Raleway-Black"
	},
	loginTextContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5
	},
	loginText: {
		fontSize: 15,
		color: "black"
	},
	loginButtonText: {
		fontSize: 15,
		color: "#EEE5FF"
	}
})
