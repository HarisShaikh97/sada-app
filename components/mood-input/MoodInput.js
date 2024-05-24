import { View, TouchableOpacity, Image, StyleSheet } from "react-native"
import PropTypes from "prop-types"

export default function MoodInput({ setCurrentMood }) {
	return (
		<View style={styles.moodsContainer}>
			<TouchableOpacity
				onPress={() => {
					setCurrentMood("sad")
				}}
			>
				<Image
					source={require("../../assets/icons/sad.png")}
					alt="mood"
					style={styles.moodIcon}
					resizeMode="contain"
				/>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => {
					setCurrentMood("neutral")
				}}
			>
				<Image
					source={require("../../assets/icons/neutral.png")}
					alt="mood"
					style={styles.moodIcon}
					resizeMode="contain"
				/>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => {
					setCurrentMood("happy")
				}}
			>
				<Image
					source={require("../../assets/icons/happy.png")}
					alt="mood"
					style={styles.moodIcon}
					resizeMode="contain"
				/>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	moodsContainer: {
		width: "100%",
		flexDirection: "row",
		gap: 50,
		alignItems: "center",
		justifyContent: "center"
	},
	moodIcon: {
		height: 50,
		width: 50
	}
})

MoodInput.propTypes = {
	setCurrentMood: PropTypes.func.isRequired
}
