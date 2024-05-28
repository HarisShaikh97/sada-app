import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import AntDesign from "@expo/vector-icons/AntDesign"
import PropTypes from "prop-types"

export default function MessagePill({ currentMood }) {
	const router = useRouter()

	return (
		<View
			style={[
				styles.messageContainer,
				currentMood === "happy"
					? styles.happyMessageContainer
					: currentMood === "neutral"
					? styles.neutralMessageContainer
					: styles.sadMessageContainer
			]}
		>
			<View style={styles.messageTextWrapper}>
				<Text
					style={[
						styles.messageText,
						currentMood === "happy"
							? styles.happyMessageText
							: currentMood === "neutral"
							? styles.neutralMessageText
							: styles.sadMessageText
					]}
					numberOfLines={2}
				>
					{currentMood === "happy"
						? "great! wanna talk about it?"
						: currentMood === "neutral"
						? "Well, something's better than nothing"
						: "Oh :/ sharing the burden might help"}
				</Text>
			</View>
			<TouchableOpacity
				style={[
					styles.messageButton,
					currentMood === "happy"
						? styles.happyMessageButton
						: currentMood === "neutral"
						? styles.neutralMessageButton
						: styles.sadMessageButton
				]}
				onPress={() => {
					router?.navigate("/chat")
				}}
			>
				<AntDesign name="arrowright" size={25} color="white" />
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	messageContainer: {
		height: 55,
		width: 265,
		borderRadius: 30,
		flexDirection: "row",
		alignItems: "center"
	},
	messageTextWrapper: {
		flex: 1,
		paddingHorizontal: 25
	},
	messageText: {
		fontSize: 15,
		fontWeight: "400"
	},
	happyMessageText: {
		color: "#237815"
	},
	neutralMessageText: {
		color: "#157854"
	},
	sadMessageText: {
		color: "#783E15"
	},
	messageButton: {
		height: "100%",
		width: 75,
		borderRadius: 35,
		alignItems: "center",
		justifyContent: "center"
	},
	happyMessageButton: {
		backgroundColor: "#83C578"
	},
	neutralMessageButton: {
		backgroundColor: "#78C5A9"
	},
	sadMessageButton: {
		backgroundColor: "#C59878"
	},
	happyMessageContainer: {
		backgroundColor: "#C3EABD"
	},
	neutralMessageContainer: {
		backgroundColor: "#BDEADF"
	},
	sadMessageContainer: {
		backgroundColor: "#EAD5BD"
	}
})

MessagePill.propTypes = {
	currentMood: PropTypes.string.isRequired
}
