import {
	TouchableOpacity,
	View,
	ImageBackground,
	Text,
	StyleSheet
} from "react-native"
import { router } from "expo-router"
import { useFonts } from "expo-font"
import { Octicons } from "@expo/vector-icons"
import LogoCircle from "../components/logo-circle/LogoCircle"

export default function Page() {
	const [fontsLoaded] = useFonts({
		"Raleway-Black": require("../assets/fonts/raleway-5/Raleway-Regular.ttf")
	})
	return (
		<View style={styles.container}>
			<View style={styles.bgImageContainer}>
				<ImageBackground
					source={require("../assets/images/bg-image.png")}
					style={styles.bgImage}
					resizeMode="cover"
				>
					<LogoCircle
						size={175}
						color="purple"
						backgroundColor="white"
					/>
				</ImageBackground>
			</View>
			<View style={styles.welcomeContainer}>
				{fontsLoaded && (
					<Text style={styles.welcomeTitle}>Welcome to Sada</Text>
				)}
				{fontsLoaded && (
					<Text style={styles.welcomeText}>
						For living Happier and Healthier, everyday.
					</Text>
				)}
				<TouchableOpacity
					style={styles.startButton}
					onPress={() => {
						router.navigate("/nickname")
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
	bgImageContainer: {
		height: "55%",
		width: "100%"
	},
	bgImage: {
		height: "100%",
		width: "100%",
		alignItems: "center",
		justifyContent: "center"
	},
	welcomeContainer: {
		width: "100%",
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-between",
		paddingHorizontal: 25,
		marginBottom: 35,
		marginTop: 15
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
