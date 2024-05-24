import { View, Image, TouchableOpacity, StyleSheet } from "react-native"
import { usePathname, useRouter } from "expo-router"

export default function BottomNav() {
	const pathName = usePathname()

	const router = useRouter()

	return (
		<View style={styles.bottomNav}>
			<TouchableOpacity
				style={styles.navItem}
				onPress={() => {
					if (pathName !== "/home") {
						router.navigate("/home")
					}
				}}
			>
				<Image
					source={require("../../assets/icons/home.png")}
					alt="icon"
					style={styles.navIcon}
					resizeMode="contain"
				/>
				{pathName === "/home" && (
					<View style={styles.activeTabMarker} />
				)}
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.navItem}
				onPress={() => {
					if (pathName !== "/sessions") {
						router.navigate("/sessions")
					}
				}}
			>
				<Image
					source={require("../../assets/icons/sessions.png")}
					alt="icon"
					style={styles.navIcon}
					resizeMode="contain"
				/>
				{pathName === "/sessions" && (
					<View style={styles.activeTabMarker} />
				)}
			</TouchableOpacity>
			<TouchableOpacity style={styles.navItem}>
				<Image
					source={require("../../assets/icons/chat.png")}
					alt="icon"
					style={styles.navIcon}
					resizeMode="contain"
				/>
				{pathName === "/chat" && (
					<View style={styles.activeTabMarker} />
				)}
			</TouchableOpacity>
			<TouchableOpacity style={styles.navItem}>
				<Image
					source={require("../../assets/icons/therapist.png")}
					alt="icon"
					style={styles.navIcon}
					resizeMode="contain"
				/>
				{pathName === "/therapist" && (
					<View style={styles.activeTabMarker} />
				)}
			</TouchableOpacity>
			<TouchableOpacity style={styles.navItem}>
				<Image
					source={require("../../assets/icons/profile.png")}
					alt="icon"
					style={styles.navIcon}
					resizeMode="contain"
				/>
				{pathName === "/profile" && (
					<View style={styles.activeTabMarker} />
				)}
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	bottomNav: {
		height: 85,
		width: "100%",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		elevation: 5,
		shadowOffset: { width: 0, height: -5 },
		shadowOpacity: 0.25,
		shadowRadius: 3,
		backgroundColor: "white",
		flexDirection: "row",
		alignItems: "start",
		justifyContent: "space-evenly",
		paddingTop: 20
	},
	navIcon: {
		height: 20,
		width: 20
	},
	navItem: {
		flexDirection: "column",
		alignItems: "center",
		gap: 5
	},
	activeTabMarker: {
		height: 7.5,
		width: 7.5,
		borderRadius: 5,
		backgroundColor: "#BA90FF"
	}
})
