import { View, ScrollView, Text, StyleSheet } from "react-native"
import PropTypes from "prop-types"
import EventCard from "../event-card/EventCard"
import { colors } from "../../utils/constants"

export default function UpcomingEventsSection({ events }) {
	return (
		<View style={styles.sectionContainer}>
			<Text style={styles.titleText}>Upcoming</Text>
			<ScrollView
				style={styles.horizontalScrollView}
				horizontal
				showsHorizontalScrollIndicator={false}
			>
				<View style={styles.horizontalScrollContainer}>
					{events?.map((item, key) => {
						const currentColor = colors[key % colors?.length]
						return (
							<EventCard
								event={item}
								currentColor={currentColor}
								key={key}
							/>
						)
					})}
				</View>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	sectionContainer: {
		flexDirection: "column",
		gap: 15
	},
	titleText: {
		fontSize: 20,
		fontWeight: "500",
		marginLeft: 25
	},
	horizontalScrollView: {
		width: "100%"
	},
	horizontalScrollContainer: {
		flexDirection: "row",
		gap: 15,
		alignItems: "center",
		paddingHorizontal: 25
	}
})

UpcomingEventsSection.propTypes = {
	events: PropTypes.array.isRequired
}
