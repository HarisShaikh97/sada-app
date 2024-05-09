import {
	View,
	SafeAreaView,
	Image,
	TouchableOpacity,
	StyleSheet
} from "react-native"

export default function BottomNav() {
	return (
		<View style={styles.bottomNav}>
			<SafeAreaView style={styles.navListContainer}>
				<TouchableOpacity>
					<Image
						source={require("../../assets/icons/home.png")}
						alt="icon"
						style={styles.navIcon}
						resizeMode="contain"
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Image
						source={require("../../assets/icons/video.png")}
						alt="icon"
						style={styles.navIcon}
						resizeMode="contain"
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Image
						source={require("../../assets/icons/chat.png")}
						alt="icon"
						style={styles.navIcon}
						resizeMode="contain"
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Image
						source={require("../../assets/icons/therapist.png")}
						alt="icon"
						style={styles.navIcon}
						resizeMode="contain"
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Image
						source={require("../../assets/icons/profile.png")}
						alt="icon"
						style={styles.navIcon}
						resizeMode="contain"
					/>
				</TouchableOpacity>
			</SafeAreaView>
		</View>
	)
}

const styles = StyleSheet.create({
	bottomNav: {
		height: 100,
		width: "100%",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		elevation: 5,
		shadowOffset: { width: 0, height: -5 },
		shadowOpacity: 0.25,
		shadowRadius: 3,
		backgroundColor: "white",
		alignItems: "center",
		paddingTop: 20
	},
	navListContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		width: "100%"
	},
	navIcon: {
		height: 20,
		width: 20
	}
})
