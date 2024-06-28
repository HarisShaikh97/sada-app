import { useState, useContext } from "react"
import { View, ScrollView, Text, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { useFonts } from "expo-font"
import axios from "axios"
import Toast from "react-native-root-toast"
import { AppContext } from "../../context/context"
import LogoCircle from "../../components/logo-circle/LogoCircle"
import NextButton from "../../components/next-button/NextButton"
import FeelingCard from "../../components/feeling-card/FeelingCard"
import FeelingInput from "../../components/feeling-input/FeelingInput"

export default function Page() {
	const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL

	const [fontsLoaded] = useFonts({
		"Raleway-Black": require("../../assets/fonts/raleway-5/Raleway-Regular.ttf")
	})

	const { state } = useContext(AppContext)

	const router = useRouter()

	const options = ["depression", "anxiety", "ASD", "ADHD"]

	const [selectedOptions, setSelectedOptions] = useState([])
	const [optionInput, setOptionInput] = useState("")

	const handleNext = async () => {
		if (optionInput?.length > 0) {
			const payload = {
				feeling: [...selectedOptions, optionInput]
			}
			await axios
				.put(
					`${API_BASE_URL}/api/user?accessToken=${state?.accessToken}`,
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
		} else if (selectedOptions?.length > 0) {
			const payload = {
				feeling: selectedOptions
			}
			await axios
				.put(
					`${API_BASE_URL}/api/user?accessToken=${state?.accessToken}`,
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

	return (
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
								numberOfLines={2}
								ellipsizeMode="tail"
							>
								{selectedOptions?.length > 0 ||
								optionInput?.length > 0
									? "Choose the options that apply to you"
									: "How are you Feeling?"}
							</Text>
						)}
					</View>
					<ScrollView
						style={styles?.scrollArea}
						showsVerticalScrollIndicator={false}
					>
						<View style={styles.optionsScrollContainer}>
							{options?.map((item, key) => {
								return (
									<FeelingCard
										selectedOptions={selectedOptions}
										setSelectedOptions={setSelectedOptions}
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
					</ScrollView>
				</View>
			</View>
			<NextButton color="#371B72" handleNext={handleNext} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		gap: 25,
		backgroundColor: "#9973E9",
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
		height: 100,
		width: "100%"
	},
	titleText: {
		fontSize: 35,
		color: "white",
		fontFamily: "Raleway-Black"
	},
	scrollArea: {
		width: "100%",
		flex: 1
	},
	optionsScrollContainer: {
		width: "100%",
		flexDirection: "column",
		gap: 15,
		alignItems: "center"
	}
})
