import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native"
import PropTypes from "prop-types"

export default function TherapistEmergencyPopup({ showPopup, setShowPopup }) {
	return (
		<Modal
			animationType="fade"
			transparent
			visible={showPopup}
			onRequestClose={() => {
				setShowPopup(false)
			}}
		>
			<View style={styles.container}>
				<View style={styles.popupContainer}>
					<View style={styles.popupTextContainer}>
						<Text style={styles.questionText}>
							Are you sure you want to emergency contact?
						</Text>
						<Text style={styles.warningText}>
							This action is irreversible
						</Text>
					</View>
					<View style={styles.buttonsContainer}>
						<TouchableOpacity
							onPress={() => {
								setShowPopup(false)
							}}
						>
							<Text style={styles.buttonText}>Yes</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								setShowPopup(false)
							}}
						>
							<Text style={styles.buttonText}>No</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		alignItems: "center",
		justifyContent: "center"
	},
	popupContainer: {
		height: 135,
		width: 250,
		borderRadius: 10,
		padding: 20,
		backgroundColor: "white",
		flexDirection: "column",
		justifyContent: "space-between"
	},
	popupTextContainer: {
		flexDirection: "column"
	},
	questionText: {
		fontSize: 17.5,
		fontWeight: "500"
	},
	warningText: {
		fontSize: 15,
		color: "gray"
	},
	buttonsContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	buttonText: {
		fontSize: 15,
		fontWeight: "500"
	}
})

TherapistEmergencyPopup.propTypes = {
	showPopup: PropTypes.bool.isRequired,
	setShowPopup: PropTypes.func.isRequired
}
