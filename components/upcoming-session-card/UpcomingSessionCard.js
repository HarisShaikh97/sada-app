import {
	View,
	Text,
	Image,
	TouchableOpacity,
	Linking,
	StyleSheet
} from "react-native"
import AntDesign from "@expo/vector-icons/AntDesign"
import PropTypes from "prop-types"

export default function UpcomingSessionCard({ session }) {
	const handlePress = async () => {
		try {
			const supported = await Linking.canOpenURL(session?.meetingUrl)
			if (supported) {
				await Linking.openURL(session?.meetingUrl)
			} else {
				console.warn(`Cannot open URL`)
			}
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<View style={styles.upcomingSessionCard}>
			<Text style={styles.upcomingSessionHeading}>Upcoming Session</Text>
			<Text style={styles.upcomingSessionTitle}>
				{session?.therapist?.fullName},{" "}
				{session?.therapist?.specialization}
			</Text>
			<Text style={styles.upcomingSessionTime}>{session?.time}</Text>
			<TouchableOpacity
				style={styles.joinNowButton}
				onPress={handlePress}
			>
				<Text style={styles.joinNowButtonText}>Join Now</Text>
				<AntDesign name="play" size={12.5} color="black" />
			</TouchableOpacity>
			<Image
				source={require("../../assets/images/wave.png")}
				alt="bg"
				style={styles.waveImage}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	upcomingSessionCard: {
		height: 125,
		width: "100%",
		borderRadius: 15,
		backgroundColor: "white",
		flexDirection: "column",
		gap: 5,
		padding: 15,
		position: "relative",
		overflow: "hidden"
	},
	upcomingSessionHeading: {
		fontSize: 17.5,
		fontWeight: "800"
	},
	upcomingSessionTitle: {
		fontSize: 10
	},
	upcomingSessionTime: {
		fontSize: 12.5,
		fontWeight: "bold"
	},
	joinNowButton: {
		flexDirection: "row",
		alignItems: "center",
		gap: 6.5,
		marginTop: 10,
		zIndex: 5
	},
	joinNowButtonText: {
		fontWeight: "bold"
	},
	waveImage: {
		position: "absolute",
		bottom: 0,
		right: 0,
		height: 35,
		width: "100%"
	}
})

UpcomingSessionCard.propTypes = {
	session: PropTypes.object
}
