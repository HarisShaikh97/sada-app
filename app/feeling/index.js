import { useState, useEffect } from "react"
import {
	View,
	KeyboardAvoidingView,
	ScrollView,
	Text,
	Platform,
	StyleSheet
} from "react-native"
import { useRouter } from "expo-router"
import { useFonts } from "expo-font"
import axios from "axios"
import Toast from "react-native-root-toast"
import { getAccessToken } from "../../utils/helpers"
import LogoCircle from "../../components/logo-circle/LogoCircle"
import NextButton from "../../components/next-button/NextButton"
import FeelingCard from "../../components/feeling-card/FeelingCard"
import FeelingInput from "../../components/feeling-input/FeelingInput"

export default function Page() {
	const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL

	const [fontsLoaded] = useFonts({
		"Raleway-Black": require("../../assets/fonts/raleway-5/Raleway-Regular.ttf")
	})

	const router = useRouter()

	const options = ["depression", "anxiety", "ASD", "ADHD"]

	const [selectedOptions, setSelectedOptions] = useState([])
	const [optionInput, setOptionInput] = useState("")
	const [accessToken, setAccessToken] = useState("")

	const handleNext = async () => {
		if (optionInput?.length > 0 && accessToken?.length > 0) {
			const payload = {
				feeling: [...selectedOptions, optionInput]
			}
			await axios
				.put(
					`${API_BASE_URL}/api/user?accessToken=${accessToken}`,
					payload
				)
				?.then((res) => {
					console.log(res)
					Toast.show(res?.data?.Message, {
						duration: 1500
					})
					router?.navigate("/home")
				})
				?.catch((err) => {
					console.log(err)
					Toast.show("Error!", {
						duration: 1500
					})
				})
		} else if (selectedOptions?.length > 0 && accessToken?.length > 0) {
			const payload = {
				feeling: selectedOptions
			}
			await axios
				.put(
					`${API_BASE_URL}/api/user?accessToken=${accessToken}`,
					payload
				)
				?.then((res) => {
					console.log(res)
					Toast.show(res?.data?.Message, {
						duration: 1500
					})
					router?.navigate("/home")
				})
				?.catch((err) => {
					console.log(err)
					Toast.show("Error!", {
						duration: 1500
					})
				})
		}
	}

	useEffect(() => {
		;(async () => {
			await getAccessToken()
				?.then((res) => {
					console.log(res)
					setAccessToken(res)
				})
				?.catch((err) => {
					console.log(err)
				})
		})()
	}, [])

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles?.layout}
		>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.container}>
					<View style={styles.contentWrapper}>
						<LogoCircle
							size={100}
							color="purple"
							backgroundColor="#EEE5FF"
						/>
						<View style={styles.quizWrapper}>
							<View style={styles.titleWrapper}>
								{fontsLoaded && (
									<Text
										style={styles.titleText}
										numberOfLines={3}
										ellipsizeMode="tail"
									>
										{selectedOptions?.length > 0 ||
										optionInput?.length > 0
											? "Choose the options that apply to you"
											: "How are you Feeling?"}
									</Text>
								)}
							</View>
							<View style={styles.optionsContainer}>
								{options?.map((item, key) => {
									return (
										<FeelingCard
											selectedOptions={selectedOptions}
											setSelectedOptions={
												setSelectedOptions
											}
											feeling={item}
											key={key}
										/>
									)
								})}
								{fontsLoaded && (
									<FeelingInput
										optionInput={optionInput}
										setOptionInput={setOptionInput}
									/>
								)}
							</View>
						</View>
					</View>
					<NextButton color="#371B72" handleNext={handleNext} />
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	layout: {
		flex: 1,
		backgroundColor: "#9973E9"
	},
	container: {
		flex: 1,
		flexDirection: "column",
		gap: 25,
		paddingHorizontal: 25,
		paddingBottom: 50
	},
	contentWrapper: {
		flexDirection: "column",
		alignItems: "center",
		gap: 25,
		marginTop: 75,
		flex: 1
	},
	quizWrapper: {
		width: "100%",
		flexDirection: "column",
		flex: 1
	},
	titleWrapper: {
		width: "100%",
		marginBottom: 15
	},
	titleText: {
		fontSize: 35,
		color: "white",
		fontFamily: "Raleway-Black"
	},
	optionsContainer: {
		width: "100%",
		flexDirection: "column",
		gap: 15,
		alignItems: "center"
	}
})
