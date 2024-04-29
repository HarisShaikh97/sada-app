import {
	TouchableOpacity,
	View,
	ImageBackground,
	Image,
	Text,
	StyleSheet
} from "react-native"
import { router } from "expo-router"
import { useFonts } from "expo-font"
import { Octicons } from "@expo/vector-icons"

export default function Page() {
	const [fontsLoaded] = useFonts({
		"Raleway-Black": require("../assets/fonts/raleway-5/Raleway-Regular.ttf")
	})
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require("../assets/images/bg-image.png")}
				style={styles.bgImage}
				resizeMode="cover"
			>
				<View style={styles.logoContainer}>
					<Image
						source={require("../assets/icons/logo-purple.png")}
						style={styles.logo}
						alt="logo"
					/>
				</View>
			</ImageBackground>
			<View style={styles.welcomeContainer}>
				<View style={styles.welcomeTextContainer}>
					{fontsLoaded && (
						<Text style={styles.welcomeTitle}>Welcome to Sada</Text>
					)}
					{fontsLoaded && (
						<Text style={styles.welcomeText}>
							For living Happier and Healthier, everyday.
						</Text>
					)}
				</View>
				<TouchableOpacity
					style={styles.startButton}
					onPress={() => {
						router.navigate("/disclaimer")
					}}
				>
					{fontsLoaded && (
						<Text style={styles.startButtonText}>start</Text>
					)}
					<Octicons name="arrow-right" size={24} color="white" />
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center"
	},
	bgImage: {
		height: 500,
		width: "100%",
		alignItems: "center"
	},
	logoContainer: {
		height: 175,
		width: 175,
		borderRadius: 100,
		backgroundColor: "white",
		marginTop: 165,
		alignItems: "center",
		justifyContent: "center"
	},
	logo: {
		height: "100%",
		width: "100%"
	},
	welcomeContainer: {
		width: "100%",
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-between",
		paddingHorizontal: 25,
		paddingVertical: 50
	},
	welcomeTextContainer: {
		flexDirection: "column",
		gap: 15
	},
	welcomeTitle: {
		fontSize: 50,
		fontFamily: "Raleway-Black"
	},
	welcomeText: {
		fontSize: 25,
		fontFamily: "Raleway-Black"
	},
	startButton: {
		backgroundColor: "#7E48F0",
		height: 65,
		width: 250,
		borderRadius: 15,
		alignSelf: "center",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 10
	},
	startButtonText: {
		color: "white",
		fontSize: 25,
		fontFamily: "Raleway-Black"
	}
})
