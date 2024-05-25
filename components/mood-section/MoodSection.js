import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import PropTypes from "prop-types"
import MessagePill from "../message-pill/MessagePill"
import MoodInput from "../mood-input/MoodInput"

export default function MoodSection({ currentMood, setCurrentMood }) {
	const router = useRouter()

	return (
		<View style={styles.sectionContainer}>
			<Text style={styles.greetingsText}>How are you feeling today?</Text>
			{currentMood ? (
				<View style={styles.messageSectionContainer}>
					<MessagePill currentMood={currentMood} />
					{currentMood === "sad" && (
						<TouchableOpacity
							onPress={() => {
								router.navigate("/therapist")
							}}
						>
							<Text style={styles.therapistButtonText}>
								Or talk to your therapist {">"}
							</Text>
						</TouchableOpacity>
					)}
				</View>
			) : (
				<MoodInput setCurrentMood={setCurrentMood} />
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	sectionContainer: {
		flexDirection: "column",
		gap: 15
	},
	greetingsText: {
		fontSize: 20,
		fontWeight: "500",
		marginLeft: 25
	},
	messageSectionContainer: {
		flexDirection: "column",
		alignItems: "center",
		gap: 10,
		width: "100%"
	},
	therapistButtonText: {
		color: "gray"
	}
})

MoodSection.propTypes = {
	currentMood: PropTypes.string,
	setCurrentMood: PropTypes.func.isRequired
}
