import { View, ScrollView, Text, StyleSheet } from "react-native"
import { useState, useEffect, useContext } from "react"
import { useFonts } from "expo-font"
import axios from "axios"
import { AppContext } from "../../context/context"
import BottomNav from "../../components/bottom-nav/BottomNav"
import FeelingButton from "../../components/feeling-button/FeelingButton"
import MoodSection from "../../components/mood-section/MoodSection"
import QuoteSection from "../../components/quote-section/QuoteSection"
import UpcomingEventsSection from "../../components/upcoming-events-section/UpcomingEventsSection"
import ArticlesSection from "../../components/articles-section/ArticlesSection"

export default function Page() {
	const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL

	const { state } = useContext(AppContext)

	const [currentMood, setCurrentMood] = useState(null)
	const [articles, setArticles] = useState([])
	const [user, setUser] = useState()

	const [fontsLoaded] = useFonts({
		"Raleway-Black": require("../../assets/fonts/raleway-5/Raleway-Regular.ttf")
	})

	const events = [
		{
			date: "28 March, 2021",
			title: "Therapy Session",
			description: "Dr. Ahmad S."
		},
		{
			date: "31 March, 2021",
			title: "LUMS: Health & Hygiene Seminar",
			description: "Webinar"
		},
		{
			date: "31 March, 2021",
			title: "CBT & Benefits",
			description: "Webinar"
		}
	]

	useEffect(() => {
		;(async () => {
			await axios
				.get(`${API_BASE_URL}/api/article`)
				?.then((res) => {
					console.log(res)
					setArticles(res?.data?.articles)
				})
				?.catch((err) => {
					console.log(err)
				})
			await axios
				.get(
					`${API_BASE_URL}/api/user?accessToken=${state?.accessToken}`
				)
				?.then((res) => {
					console.log(res)
					setUser(res?.data?.data)
				})
				?.catch((err) => {
					console.log(err)
				})
		})()
	}, [])
	return (
		<View style={styles.container}>
			<ScrollView style={styles.bodyScrollView}>
				<View style={styles.bodyScrollContainer}>
					<FeelingButton />
					{fontsLoaded && (
						<Text style={styles.greetingsText}>
							Afternoon, {user?.nickName}
						</Text>
					)}
					<MoodSection
						currentMood={currentMood}
						setCurrentMood={setCurrentMood}
					/>
					<QuoteSection />
					<UpcomingEventsSection events={events} />
					<ArticlesSection articles={articles} />
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
		gap: 20,
		paddingVertical: 50
	},
	greetingsText: {
		fontSize: 35,
		fontFamily: "Raleway-Black",
		marginLeft: 25
	}
})
