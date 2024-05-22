import {
	View,
	ScrollView,
	Text,
	Image,
	TouchableOpacity,
	StyleSheet
} from "react-native"
import { useState } from "react"
import { useRouter } from "expo-router"
import { useFonts } from "expo-font"
import Entypo from "@expo/vector-icons/Entypo"
import AntDesign from "@expo/vector-icons/AntDesign"
import BottomNav from "../../components/bottom-nav/BottomNav"

export default function Page() {
	const [currentMood, setCurrentMood] = useState(null)

	const [fontsLoaded] = useFonts({
		"Raleway-Black": require("../../assets/fonts/raleway-5/Raleway-Regular.ttf")
	})

	const router = useRouter()

	const colors = [
		{
			backgroundColor: "#E4B7FF",
			color: "#7E2CAE"
		},
		{
			backgroundColor: "#B8EAFA",
			color: "#1D86A7"
		},
		{
			backgroundColor: "#EAF0A1",
			color: "#A7911D"
		},
		{
			backgroundColor: "#A6EF9A",
			color: "#1FAB2D"
		},
		{
			backgroundColor: "#F9DCA6",
			color: "#A7701D"
		},
		{
			backgroundColor: "#EF9ADC",
			color: "#AB1F84"
		},
		{
			backgroundColor: "#A6C2F9",
			color: "#1D3BA7"
		}
	]

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

	const articles = [
		{
			title: "Dealing with stage fright.",
			description: "An honest guide to boost your confidence."
		},
		{
			title: "COVID-19 and its impact.",
			description: "The pandemic opened the new opportunities!"
		},
		{
			title: "Best Breathing Exercises",
			description: "Dr. Shahzina K."
		},
		{
			title: "Practicing Mindfulness",
			description: "By Ali H."
		}
	]

	return (
		<View style={styles.container}>
			<ScrollView style={styles.bodyScrollView}>
				<View style={styles.bodyScrollContainer}>
					<TouchableOpacity
						style={styles.feelingButton}
						onPress={() => {
							router?.navigate("/feeling")
						}}
					>
						<Text style={styles.feelingButtonText}>
							How are you feeling
						</Text>
						<Entypo
							name="chevron-thin-down"
							size={12}
							color="black"
						/>
					</TouchableOpacity>
					{fontsLoaded && (
						<Text style={styles.greetingsText}>Afternoon, Ali</Text>
					)}
					<Text style={styles.greetingsTextSmall}>
						How are you feeling today?
					</Text>
					{currentMood ? (
						<View style={styles.messageSectionContainer}>
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
											? "Well, something’s better than nothing"
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
								>
									<AntDesign
										name="arrowright"
										size={25}
										color="white"
									/>
								</TouchableOpacity>
							</View>
						</View>
					) : (
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
					)}
					<View
						style={[styles.quoteSection, styles.sectionContainer]}
					>
						<Text style={styles.quoteTitle}>Quote of the Day</Text>
						<View style={styles.quoteContainer}>
							<Text style={styles.quoteText}>
								“The meaning of life is to give life meaning.”
							</Text>
						</View>
					</View>
					<View style={styles.sectionContainer}>
						<Text style={styles.greetingsTextSmall}>Upcoming</Text>
						<ScrollView
							style={styles.horizontalScrollView}
							horizontal
							showsHorizontalScrollIndicator={false}
						>
							<View style={styles.horizontalScrollContainer}>
								{events?.map((item, key) => {
									const currentColor =
										colors[key % colors?.length]
									return (
										<View
											style={[
												styles.cardContainer,
												{
													backgroundColor:
														currentColor?.backgroundColor
												}
											]}
											key={key}
										>
											<Text style={styles.eventDate}>
												{item?.date}
											</Text>
											<Text
												style={styles.eventTitle}
												numberOfLines={1}
											>
												{item?.title}
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
												{item?.description}
											</Text>
										</View>
									)
								})}
							</View>
						</ScrollView>
					</View>
					<View style={styles.sectionContainer}>
						<Text style={styles.greetingsTextSmall}>
							Curated Articles for You
						</Text>
						<ScrollView
							style={styles.horizontalScrollView}
							horizontal
							showsHorizontalScrollIndicator={false}
						>
							<View style={styles.horizontalScrollContainer}>
								{articles?.map((item, key) => {
									const currentColor =
										colors[(key + 3) % colors?.length]
									return (
										<View
											style={[
												styles.cardContainer,
												{
													backgroundColor:
														currentColor?.backgroundColor
												}
											]}
											key={key}
										>
											<Text
												style={styles.eventTitle}
												numberOfLines={2}
											>
												{item?.title}
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
												{item?.description}
											</Text>
										</View>
									)
								})}
							</View>
						</ScrollView>
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
		gap: 20,
		paddingVertical: 50
	},
	feelingButton: {
		height: 30,
		width: 165,
		borderWidth: 1,
		borderRadius: 6.5,
		borderColor: "lightgray",
		alignSelf: "flex-end",
		marginRight: 25,
		backgroundColor: "white",
		flexDirection: "row",
		gap: 5,
		alignItems: "center",
		justifyContent: "center"
	},
	feelingButtonText: {
		fontSize: 12,
		fontWeight: "bold",
		color: "#5533FF"
	},
	greetingsText: {
		fontSize: 35,
		fontFamily: "Raleway-Black",
		marginLeft: 25
	},
	greetingsTextSmall: {
		fontSize: 20,
		fontWeight: "500",
		marginLeft: 25
	},
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
	},
	quoteSection: {
		paddingHorizontal: 25
	},
	quoteContainer: {
		height: 125,
		width: "100%",
		borderRadius: 10,
		backgroundColor: "#91EEA5",
		alignSelf: "center",
		alignItems: "center",
		justifyContent: "center"
	},
	quoteTitle: {
		fontSize: 20,
		fontWeight: "500"
	},
	quoteText: {
		fontSize: 20,
		fontStyle: "italic",
		textAlign: "center",
		marginHorizontal: 20
	},
	sectionContainer: {
		flexDirection: "column",
		gap: 15
	},
	horizontalScrollView: {
		width: "100%"
	},
	horizontalScrollContainer: {
		flexDirection: "row",
		gap: 15,
		alignItems: "center",
		paddingHorizontal: 25
	},
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
	},
	messageSectionContainer: {
		flexDirection: "column",
		alignItems: "center",
		width: "100%"
	},
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
