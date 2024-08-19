import { useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import AntDesign from "@expo/vector-icons/AntDesign"
import Feather from "@expo/vector-icons/Feather"
import PropTypes from "prop-types"

export default function PostCard({ post, handleDelete }) {
	const [liked, setLiked] = useState(false)

	return (
		<View style={styles.postCard}>
			<Text style={styles.postText}>{post}</Text>
			<View style={styles.postActionsContainer}>
				<View style={styles.postActionsWrapper}>
					<TouchableOpacity
						onPress={() => {
							setLiked(!liked)
						}}
					>
						<AntDesign
							name={liked ? "heart" : "hearto"}
							size={17.5}
							color={liked ? "red" : "gray"}
						/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.actionButtonContainer}>
						<Feather
							name="message-square"
							size={17.5}
							color="gray"
						/>
						<Text style={styles.noOfComments}>8</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.postActionsWrapper}>
					<TouchableOpacity onPress={handleDelete}>
						<AntDesign name="delete" size={17.5} color="gray" />
					</TouchableOpacity>
					<TouchableOpacity>
						<AntDesign name="ellipsis1" size={17.5} color="gray" />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	postCard: {
		width: "100%",
		padding: 15,
		borderRadius: 15,
		backgroundColor: "white",
		flexDirection: "column",
		gap: 15
	},
	postText: {
		fontSize: 17.5,
		fontWeight: "300"
	},
	postActionsContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	postActionsWrapper: {
		flexDirection: "row",
		alignItems: "center",
		gap: 15
	},
	actionButtonContainer: {
		flexDirection: "row",
		gap: 2.5
	},
	noOfComments: {
		fontSize: 12.5,
		color: "gray"
	}
})

PostCard.propTypes = {
	post: PropTypes.string.isRequired,
	handleDelete: PropTypes.func.isRequired
}
