import { TextInput, StyleSheet } from "react-native"
import PropTypes from "prop-types"

export default function FeelingInput({ optionInput, setOptionInput }) {
	return (
		<TextInput
			style={[
				styles.optionContainer,
				styles.optionText,
				styles.optionTextInput
			]}
			placeholder="enter your own |"
			value={optionInput}
			onChangeText={setOptionInput}
		/>
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
	optionTextInput: {
		textAlign: "center"
	},
	optionText: {
		fontSize: 25,
		fontWeight: "600",
		fontFamily: "Raleway-Black"
	}
})

FeelingInput.propTypes = {
	optionInput: PropTypes.string.isRequired,
	setOptionInput: PropTypes.func.isRequired
}
