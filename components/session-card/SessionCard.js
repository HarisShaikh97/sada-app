import { View, Text, TouchableOpacity, Linking, StyleSheet } from "react-native"
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import Octicons from "@expo/vector-icons/Octicons"
import FontAwesome6 from "@expo/vector-icons/FontAwesome6"
import PropTypes from "prop-types"

export default function SessionCard({ session }) {
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
		<View style={styles.sessionCard}>
			<View style={styles.therapistProfileContainer}>
				<View style={styles.profileImageContainer}>
					<FontAwesome6 name="user-doctor" size={20} color="black" />
				</View>
				<View style={styles.therapistDetailsContainer}>
					<Text style={styles.therapistName}>
						{session?.therapist?.fullName}
					</Text>
					<Text style={styles.therapistDescription}>
						{session?.therapist?.specialization}
					</Text>
				</View>
			</View>
			<View style={styles.horizontalLine} />
			<View style={styles.dateTimeContainer}>
				<View style={styles.dateTimeColumn}>
					<MaterialCommunityIcons
						name="calendar-week"
						size={15}
						color="lightgray"
					/>
					<Text style={styles.dateTimeText}>{session?.date}</Text>
				</View>
				<View style={styles.dateTimeColumn}>
					<Octicons name="clock" size={15} color="lightgray" />
					<Text style={styles.dateTimeText}>{session?.time}</Text>
				</View>
			</View>
			<View style={styles.buttonsWrapper}>
				<TouchableOpacity
					style={[styles.buttonContainer, styles.rescheduleButton]}
				>
					<Text
						style={[styles.buttonText, styles.rescheduleButtonText]}
					>
						Reschedule
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.buttonContainer]}
					onPress={handlePress}
				>
					<Text style={styles.buttonText}>Join Now</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	sessionCard: {
		height: 150,
		width: "100%",
		borderRadius: 15,
		backgroundColor: "white",
		flexDirection: "column",
		justifyContent: "space-evenly",
		paddingHorizontal: 15
	},
	therapistProfileContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 15
	},
	profileImageContainer: {
		height: 35,
		width: 35,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: "gray",
		overflow: "hidden",
		alignItems: "center",
		justifyContent: "center"
	},
	therapistDetailsContainer: {
		flexDirection: "column",
		gap: 5
	},
	therapistName: {
		fontSize: 12.5,
		fontWeight: "600"
	},
	therapistDescription: {
		fontSize: 10
	},
	horizontalLine: {
		height: 1,
		width: "100%",
		backgroundColor: "lightgray"
	},
	dateTimeContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 15
	},
	dateTimeColumn: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5
	},
	dateTimeText: {
		fontSize: 10,
		color: "gray",
		fontWeight: "500"
	},
	buttonsWrapper: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5
	},
	buttonContainer: {
		height: 35,
		width: 100,
		alignItems: "center",
		justifyContent: "center"
	},
	rescheduleButton: {
		borderRadius: 7.5,
		backgroundColor: "black"
	},
	rescheduleButtonText: {
		color: "white"
	},
	buttonText: {
		fontSize: 12.5,
		fontWeight: "bold"
	}
})

SessionCard.propTypes = {
	session: PropTypes.object.isRequired
}
