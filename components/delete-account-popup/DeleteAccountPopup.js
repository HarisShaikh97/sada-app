import { useContext } from "react"
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import axios from "axios"
import Toast from "react-native-root-toast"
import PropTypes from "prop-types"
import { AppContext } from "../../context/context"

export default function DeleteAccountPopup({ showPopup, setShowPopup }) {
	const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL

	const router = useRouter()

	const { state, dispatch } = useContext(AppContext)

	const handleDeleteAccount = async () => {
		await axios
			.delete(
				`${API_BASE_URL}/api/user?accessToken=${state?.accessToken}`
			)
			?.then((res) => {
				console.log(res)
				Toast.show(res?.data?.Message, {
					duration: 1500
				})
				dispatch({
					type: "SET_ACCESS_TOKEN",
					payload: null
				})
				router?.navigate("/")
			})
			?.catch((err) => {
				console.log(err)
				Toast.show(err?.response?.data?.Message || "Error!", {
					duration: 1500
				})
			})
	}

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
							Are you sure you want to delete your account?
						</Text>
						<Text style={styles.warningText}>
							This action is irreversible
						</Text>
					</View>
					<View style={styles.buttonsContainer}>
						<TouchableOpacity onPress={handleDeleteAccount}>
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

DeleteAccountPopup.propTypes = {
	showPopup: PropTypes.bool.isRequired,
	setShowPopup: PropTypes.func.isRequired
}
