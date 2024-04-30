import {
	TouchableOpacity,
	ImageBackground,
	Image,
	View,
	Text,
	StyleSheet
} from "react-native"
import { useFonts } from "expo-font"
import { Octicons } from "@expo/vector-icons"

export default function Page() {
	const [fontsLoaded] = useFonts({
		"Raleway-Black": require("../../assets/fonts/raleway-5/Raleway-Regular.ttf")
	})
	return (
		<View style={styles.container}>
			<View style={styles.bgImageContainer}>
				<ImageBackground
					source={require("../../assets/images/bg-image2.png")}
					style={styles.bgImage}
					resizeMode="cover"
				>
					<View style={styles.logoContainer}>
						<Image
							source={require("../../assets/icons/logo-purple.png")}
							style={styles.logo}
						/>
					</View>
				</ImageBackground>
			</View>
			<View style={styles.disclaimerContainer}>
				<Text style={styles.disclaimerHeading}>Disclaimer:</Text>
				<Text style={styles.disclaimerText}>
					This is an early demo to only show how the app would look
					like while showing the basic functions. This prototype is
					NOT demonstrating the final version.
				</Text>
				<Text style={styles.instructionsHeading}>Instructions:</Text>
				<Text style={styles.disclaimerText}>
					Click on the buttons and actions as you would on a regular
					app. Clicking anywhere on the phone will highlight the
					possible actions in a blue box. For the purpose of this
					demonstration, you will be using the application as “Jam”
				</Text>
			</View>
			<TouchableOpacity style={styles.startButton}>
				{fontsLoaded && (
					<Text style={styles.startButtonText}>start</Text>
				)}
				<Octicons name="arrow-right" size={24} color="white" />
			</TouchableOpacity>
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
		height: "30%",
		width: "100%"
	},
	bgImage: {
		height: "100%",
		width: "100%",
		alignItems: "center",
		justifyContent: "center"
	},
	logoContainer: {
		height: 85,
		width: 85,
		borderRadius: 45,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center"
	},
	logo: {
		height: "100%",
		width: "100%"
	},
	disclaimerContainer: {
		flex: 1,
		width: "100%",
		paddingHorizontal: 15,
		paddingTop: 15,
		flexDirection: "column"
	},
	disclaimerHeading: {
		fontSize: 22.5,
		fontWeight: "600"
	},
	instructionsHeading: {
		marginTop: 25,
		fontSize: 22.5,
		fontWeight: "600"
	},
	disclaimerText: {
		fontSize: 17.5,
		marginTop: 15
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
		gap: 10,
		marginBottom: 35
	},
	startButtonText: {
		color: "white",
		fontSize: 25,
		fontFamily: "Raleway-Black"
	}
})
