import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import Octicons from "@expo/vector-icons/Octicons"
import PropTypes from "prop-types"

export default function SessionCard({ session }) {
	return (
		<View style={styles.sessionCard}>
			<View style={styles.therapistProfileContainer}>
				<View style={styles.profileImageContainer}>
					<Image
						source={session?.image}
						alt="profile"
						style={styles.profileImage}
					/>
				</View>
				<View style={styles.therapistDetailsContainer}>
					<Text style={styles.therapistName}>
						{session?.therapistName}
					</Text>
					<Text style={styles.therapistDescription}>
						{session?.therapistDescription}
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
				<TouchableOpacity style={[styles.buttonContainer]}>
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
		overflow: "hidden"
	},
	profileImage: {
		height: "100%",
		width: "100%"
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
