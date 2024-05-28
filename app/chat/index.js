import {
	View,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet
} from "react-native"
import { useState } from "react"
import { useFonts } from "expo-font"
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons"
import FontAwesome6 from "@expo/vector-icons/FontAwesome6"
import BottomNav from "../../components/bottom-nav/BottomNav"
import PostCard from "../../components/post-card/PostCard"

export default function Page() {
	const [fontsLoaded] = useFonts({
		"Raleway-Black": require("../../assets/fonts/raleway-5/Raleway-Regular.ttf")
	})

	const [postInput, setPostInput] = useState("")
	const [posts, setPosts] = useState([])

	const handleSubmit = () => {
		if (postInput?.length > 0) {
			setPosts([...posts, postInput])
			setPostInput("")
		}
	}

	return (
		<View style={styles.container}>
			<ScrollView style={styles.bodyScrollView}>
				<View style={styles.bodyScrollContainer}>
					<View style={styles.headerTitleContainer}>
						{fontsLoaded && (
							<Text style={styles.titleText}>Community</Text>
						)}
						<View style={styles.locationContainer}>
							<Text style={styles.locationText}>LUMS</Text>
							<SimpleLineIcons
								name="location-pin"
								size={15}
								color="black"
							/>
						</View>
					</View>
					<View style={styles.shareBox}>
						<View style={styles.shareBoxTitleContainer}>
							<Text style={styles.shareBoxTitle}>
								Share Something
							</Text>
							<TouchableOpacity onPress={handleSubmit}>
								<FontAwesome6
									name="angle-right"
									size={20}
									color="black"
								/>
							</TouchableOpacity>
						</View>
						<TextInput
							style={styles.inputBox}
							value={postInput}
							onChangeText={setPostInput}
							placeholder="Write something..."
							multiline
						/>
					</View>
					<View style={styles.postContainer}>
						{posts?.map((item, key) => {
							return <PostCard post={item} key={key} />
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
		gap: 25,
		paddingTop: 75,
		paddingBottom: 50,
		paddingHorizontal: 15
	},
	headerTitleContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	titleText: {
		fontSize: 30,
		fontFamily: "Raleway-Black"
	},
	locationContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5
	},
	locationText: {
		fontSize: 15,
		fontWeight: "500",
		color: "gray"
	},
	shareBox: {
		height: 175,
		width: "100%",
		borderRadius: 15,
		backgroundColor: "#8FC9FF",
		flexDirection: "column",
		alignItems: "center",
		gap: 15,
		padding: 15
	},
	shareBoxTitleContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	shareBoxTitle: {
		fontSize: 20,
		fontWeight: "500"
	},
	inputBox: {
		flex: 1,
		width: "100%",
		borderRadius: 15,
		backgroundColor: "#F1F8FF",
		paddingTop: 15,
		paddingBottom: 15,
		paddingHorizontal: 10,
		fontSize: 17.5
	},
	postContainer: {
		width: "100%",
		flexDirection: "column",
		alignItems: "center",
		gap: 10
	}
})
