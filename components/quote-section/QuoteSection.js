import { View, Text, StyleSheet } from "react-native"
import QuoteCard from "../quote-card/QuoteCard"

export default function QuoteSection() {
	return (
		<View style={styles.sectionContainer}>
			<Text style={styles.quoteTitle}>Quote of the Day</Text>
			<QuoteCard />
		</View>
	)
}

const styles = StyleSheet.create({
	sectionContainer: {
		flexDirection: "column",
		gap: 15,
		paddingHorizontal: 25
	},
	quoteTitle: {
		fontSize: 20,
		fontWeight: "500"
	}
})
