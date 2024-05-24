import {
	View,
	ScrollView,
	TouchableOpacity,
	Text,
	Image,
	StyleSheet
} from "react-native"
import BottomNav from "../../components/bottom-nav/BottomNav"
import UpcomingSessionCard from "../../components/upcoming-session-card/UpcomingSessionCard"
import SessionsListHeader from "../../components/sessions-list-header/SessionsListHeader"
import SessionCard from "../../components/session-card/SessionCard"

export default function Page() {
	const sessions = [
		{
			therapistName: "Sahana V",
			therapistDescription: "Msc in Clinical Psychology",
			image: require("../../assets/images/profile.png"),
			date: "31st March '22",
			time: "7:30 PM - 8:30 PM"
		},
		{
			therapistName: "Sahana V",
			therapistDescription: "Msc in Clinical Psychology",
			image: require("../../assets/images/profile.png"),
			date: "31st March '22",
			time: "7:30 PM - 8:30 PM"
		},
		{
			therapistName: "Sahana V",
			therapistDescription: "Msc in Clinical Psychology",
			image: require("../../assets/images/profile.png"),
			date: "31st March '22",
			time: "7:30 PM - 8:30 PM"
		},
		{
			therapistName: "Sahana V",
			therapistDescription: "Msc in Clinical Psychology",
			image: require("../../assets/images/profile.png"),
			date: "31st March '22",
			time: "7:30 PM - 8:30 PM"
		},
		{
			therapistName: "Sahana V",
			therapistDescription: "Msc in Clinical Psychology",
			image: require("../../assets/images/profile.png"),
			date: "31st March '22",
			time: "7:30 PM - 8:30 PM"
		}
	]

	return (
		<View style={styles.container}>
			<ScrollView style={styles.bodyScrollView}>
				<View style={styles.bodyScrollContainer}>
					<UpcomingSessionCard />
					<SessionsListHeader />
					<View style={styles.sessionsListContainer}>
						{sessions?.map((item, key) => {
							return <SessionCard session={item} key={key} />
						})}
					</View>
				</View>
			</ScrollView>
			<BottomNav />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "#F4F4F4"
	},
	bodyScrollView: {
		flex: 1,
		width: "100%"
	},
	bodyScrollContainer: {
		width: "100%",
		flexDirection: "column",
		gap: 15,
		paddingVertical: 50,
		paddingHorizontal: 35
	},
	sessionsListContainer: {
		width: "100%",
		flexDirection: "column",
		alignItems: "center",
		gap: 15
	}
})
