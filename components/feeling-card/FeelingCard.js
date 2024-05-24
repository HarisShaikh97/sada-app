import { View, TouchableOpacity, Text, StyleSheet } from "react-native"
import { useFonts } from "expo-font"
import { FontAwesome } from "@expo/vector-icons"
import PropTypes from "prop-types"

export default function FeelingCard({
	selectedOptions,
	setSelectedOptions,
	feeling
}) {
	const [fontsLoaded] = useFonts({
		"Raleway-Black": require("../../assets/fonts/raleway-5/Raleway-Regular.ttf")
	})

	return (
		<TouchableOpacity
			style={[
				styles.optionContainer,
				selectedOptions?.includes(feeling)
					? styles.selectedOptionContainer
					: styles.UnSelectedOptionContainer
			]}
			onPress={() => {
				if (selectedOptions?.includes(feeling)) {
					setSelectedOptions(
						selectedOptions?.filter((selectedOption) => {
							return selectedOption !== feeling
						})
					)
				} else {
					setSelectedOptions([...selectedOptions, feeling])
				}
			}}
		>
			{selectedOptions?.includes(feeling) && (
				<View style={styles.emptyContainer} />
			)}
			{fontsLoaded && <Text style={styles.optionText}>{feeling}</Text>}
			{selectedOptions?.includes(feeling) && (
				<FontAwesome name="check" size={25} color="black" />
			)}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	optionContainer: {
		height: 65,
		width: "100%",
		borderRadius: 15,
		backgroundColor: "#E7DCFF",
		paddingHorizontal: 25,
		flexDirection: "row",
		alignItems: "center"
	},
	emptyContainer: {
		width: 25
	},
	selectedOptionContainer: {
		justifyContent: "space-between",
		borderWidth: 2
	},
	UnSelectedOptionContainer: {
		justifyContent: "center",
		borderWidth: 0
	},
	optionText: {
		fontSize: 25,
		fontWeight: "600",
		fontFamily: "Raleway-Black"
	}
})

FeelingCard.propTypes = {
	selectedOptions: PropTypes.array.isRequired,
	setSelectedOptions: PropTypes.func.isRequired,
	feeling: PropTypes.string.isRequired
}
