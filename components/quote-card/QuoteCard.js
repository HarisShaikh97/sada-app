import { View, Text, StyleSheet } from "react-native"

export default function QuoteCard() {
	return (
		<View style={styles.quoteContainer}>
			<Text style={styles.quoteText}>
				“The meaning of life is to give life meaning.”
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	quoteContainer: {
		height: 125,
		width: "100%",
		borderRadius: 10,
		backgroundColor: "#91EEA5",
		alignSelf: "center",
		alignItems: "center",
		justifyContent: "center"
	},
	quoteText: {
		fontSize: 20,
		fontStyle: "italic",
		textAlign: "center",
		marginHorizontal: 20
	}
})
