import { TouchableOpacity, Text, StyleSheet } from "react-native"
import PropTypes from "prop-types"

export default function EventCard({ event, currentColor }) {
	return (
		<TouchableOpacity
			style={[
				styles.cardContainer,
				{
					backgroundColor: currentColor?.backgroundColor
				}
			]}
		>
			<Text style={styles.eventDate}>{event?.date}</Text>
			<Text style={styles.eventTitle} numberOfLines={1}>
				{event?.therapist?.fullName}
			</Text>
			<Text
				style={[
					styles.eventDescription,
					{
						color: currentColor?.color
					}
				]}
				numberOfLines={1}
			>
				{event?.notes}
			</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	cardContainer: {
		height: 100,
		width: 165,
		borderRadius: 10,
		flexDirection: "column",
		paddingHorizontal: 10,
		justifyContent: "space-evenly"
	},
	eventDate: {
		fontWeight: "500"
	},
	eventTitle: {
		fontSize: 16.5,
		fontWeight: "500"
	},
	eventDescription: {
		fontWeight: "500"
	}
})

EventCard.propTypes = {
	event: PropTypes.object.isRequired,
	currentColor: PropTypes.object.isRequired
}
