import { View, ScrollView, StyleSheet } from "react-native"
import BottomNav from "../../components/bottom-nav/BottomNav"

export default function Page() {
	return (
		<View style={styles.container}>
			<ScrollView style={styles.bodyScrollView}></ScrollView>
			<BottomNav />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		flexDirection: "column",
		alignItems: "center"
	},
	bodyScrollView: {
		flex: 1,
		width: "100%"
	}
})
