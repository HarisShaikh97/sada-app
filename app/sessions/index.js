import { useEffect, useState } from "react"
import { View, ScrollView, StyleSheet } from "react-native"
import axios from "axios"
import { getAccessToken } from "../../utils/helpers"
import BottomNav from "../../components/bottom-nav/BottomNav"
import UpcomingSessionCard from "../../components/upcoming-session-card/UpcomingSessionCard"
import SessionsListHeader from "../../components/sessions-list-header/SessionsListHeader"
import SessionCard from "../../components/session-card/SessionCard"

export default function Page() {
	const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL

	const [meetings, setMeetings] = useState([])
	const [accessToken, setAccessToken] = useState("")

	useEffect(() => {
		;(async () => {
			if (accessToken?.length > 0) {
				await axios
					.get(
						`${API_BASE_URL}/api/meeting?accessToken=${accessToken}`
					)
					?.then((res) => {
						console.log(res)
						setMeetings(res?.data?.meetings)
					})
					?.catch((err) => {
						console.log(err)
					})
			} else {
				await getAccessToken()
					?.then((res) => {
						console.log(res)
						setAccessToken(res)
					})
					?.catch((err) => {
						console.log(err)
					})
			}
		})()
	}, [accessToken])

	return (
		<View style={styles.container}>
			<ScrollView style={styles.bodyScrollView}>
				<View style={styles.bodyScrollContainer}>
					<UpcomingSessionCard session={meetings[0]} />
					<SessionsListHeader />
					<View style={styles.sessionsListContainer}>
						{meetings?.map((item, key) => {
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
