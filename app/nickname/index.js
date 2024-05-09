import { useState } from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { useFonts } from "expo-font"
import LogoCircle from "../../components/logo-circle/LogoCircle"
import NextButton from "../../components/next-button/NextButton"

export default function Page() {
	const [fontsLoaded] = useFonts({
		"Raleway-Black": require("../../assets/fonts/raleway-5/Raleway-Regular.ttf")
	})

	const router = useRouter()

	const [nickname, setNickname] = useState("")

	const handleNext = () => {
		router.navigate("/feeling")
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
