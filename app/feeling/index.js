import { useState } from "react"
import {
	View,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet
} from "react-native"
import { useRouter } from "expo-router"
import { useFonts } from "expo-font"
import { FontAwesome } from "@expo/vector-icons"
import LogoCircle from "../../components/logo-circle/LogoCircle"
import NextButton from "../../components/next-button/NextButton"

export default function Page() {
	const [fontsLoaded] = useFonts({
		"Raleway-Black": require("../../assets/fonts/raleway-5/Raleway-Regular.ttf")
	})

	const router = useRouter()

	const options = ["depression", "anxiety", "ASD", "ADHD"]

	const [selectedOptions, setSelectedOptions] = useState([])
	const [optionInput, setOptionInput] = useState("")

	const handleNext = () => {
		if (selectedOptions?.length > 0 || optionInput?.length > 0) {
			router?.navigate("/home")
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
							<Text style={styles.titleText}>
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
									<TouchableOpacity
										style={[
											styles.optionContainer,
											{
												justifyContent:
													selectedOptions?.includes(
														item
													)
														? "space-between"
														: "center",
												borderWidth:
													selectedOptions?.includes(
														item
													)
														? 2
														: 0,
												flexDirection: "row",
												alignItems: "center"
											}
										]}
										onPress={() => {
											if (
												selectedOptions?.includes(item)
											) {
												setSelectedOptions(
													selectedOptions?.filter(
														(selectedOption) => {
															return (
																selectedOption !==
																item
															)
														}
													)
												)
											} else {
												setSelectedOptions([
													...selectedOptions,
													item
												])
											}
										}}
										key={key}
									>
										{selectedOptions?.includes(item) && (
											<View
												style={styles.emptyContainer}
											/>
										)}
										{fontsLoaded && (
											<Text style={styles.optionText}>
												{item}
											</Text>
										)}
										{selectedOptions?.includes(item) && (
											<FontAwesome
												name="check"
												size={25}
												color="black"
											/>
										)}
									</TouchableOpacity>
								)
							})}
							{fontsLoaded && (
								<TextInput
									style={[
										styles.optionContainer,
										styles.optionText,
										styles.optionTextInput
									]}
									placeholder="enter your own |"
									value={optionInput}
									onChangeText={setOptionInput}
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
	emptyContainer: {
		width: 25
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
	},
	optionContainer: {
		height: 75,
		width: "100%",
		borderRadius: 15,
		backgroundColor: "#E7DCFF",
		paddingHorizontal: 25
	},
	optionText: {
		fontSize: 25,
		fontWeight: "600",
		fontFamily: "Raleway-Black"
	},
	optionTextInput: {
		textAlign: "center"
	}
})
