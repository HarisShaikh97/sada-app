import { Text, TouchableOpacity, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import Entypo from "@expo/vector-icons/Entypo"

export default function FeelingButton() {
	const router = useRouter()

	return (
		<TouchableOpacity
			style={styles.feelingButton}
			onPress={() => {
				router?.navigate("/feeling")
			}}
		>
			<Text style={styles.feelingButtonText}>How are you feeling</Text>
			<Entypo name="chevron-thin-down" size={12} color="black" />
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	feelingButton: {
		height: 30,
		width: 165,
		borderWidth: 1,
		borderRadius: 6.5,
		borderColor: "lightgray",
		alignSelf: "flex-end",
		marginRight: 25,
		backgroundColor: "white",
		flexDirection: "row",
		gap: 5,
		alignItems: "center",
		justifyContent: "center"
	},
	feelingButtonText: {
		fontSize: 12,
		fontWeight: "bold",
		color: "#5533FF"
	}
})
