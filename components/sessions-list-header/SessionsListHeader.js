import { View, Text, Image, StyleSheet } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"

export default function SessionsListHeader() {
	return (
		<View style={styles.sessionsListHeader}>
			<View style={styles.sessionsTitleContainer}>
				<Text style={styles.sessionsTitleText}>All Sessions</Text>
				<Ionicons
					name="chevron-down-outline"
					size={17.5}
					color="black"
				/>
			</View>
			<Image
				source={require("../../assets/icons/arrow-up-down.png")}
				alt="icon"
				resizeMode="contain"
				style={styles.arrowUpDownIcon}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	sessionsListHeader: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	sessionsTitleContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10
	},
	sessionsTitleText: {
		fontSize: 16.5
	},
	arrowUpDownIcon: {
		height: 15,
		width: 15
	}
})
