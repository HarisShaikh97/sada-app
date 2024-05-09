import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { useFonts } from "expo-font"
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import PropTypes from "prop-types"

export default function NextButton({ color, handleNext }) {
	const [fontsLoaded] = useFonts({
		"Raleway-Black": require("../../assets/fonts/raleway-5/Raleway-Regular.ttf")
	})

	return (
		<TouchableOpacity style={styles.nextButton} onPress={handleNext}>
			{fontsLoaded && (
				<Text style={[styles.nextButtonText, { color: color }]}>
					next
				</Text>
			)}
			<MaterialCommunityIcons
				name="arrow-right-thin"
				size={35}
				color={color}
			/>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	nextButton: {
		flexDirection: "row",
		alignItems: "center",
		alignSelf: "flex-end"
	},
	nextButtonText: {
		fontSize: 25,
		fontFamily: "Raleway-Black"
	}
})

NextButton.propTypes = {
	color: PropTypes.string.isRequired,
	handleNext: PropTypes.func.isRequired
}
