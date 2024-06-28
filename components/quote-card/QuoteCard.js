import { useState, useEffect } from "react"
import axios from "axios"
import { View, Text, StyleSheet } from "react-native"

export default function QuoteCard() {
	const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL

	const [quote, setQuote] = useState("")

	useEffect(() => {
		;(async () => {
			await axios
				.get(`${API_BASE_URL}/api/quote`)
				?.then((res) => {
					console.log(res)
					setQuote(res?.data?.data?.quote)
				})
				?.catch((err) => {
					console.log(err)
				})
		})()
	}, [])

	return (
		<View style={styles.quoteContainer}>
			<Text style={styles.quoteText}>“{quote}”</Text>
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
