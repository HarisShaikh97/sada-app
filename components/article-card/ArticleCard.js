import { TouchableOpacity, Text, Linking, StyleSheet } from "react-native"
import PropTypes from "prop-types"

export default function ArticleCard({ article, currentColor }) {
	const handlePress = async () => {
		try {
			const supported = await Linking.canOpenURL(article?.url)
			if (supported) {
				await Linking.openURL(article?.url)
			} else {
				console.warn(`Cannot open URL`)
			}
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<TouchableOpacity
			style={[
				styles.cardContainer,
				{
					backgroundColor: currentColor?.backgroundColor
				}
			]}
			onPress={handlePress}
		>
			<Text style={styles.articleTitle} numberOfLines={2}>
				{article?.title}
			</Text>
			<Text
				style={[
					styles.articleDescription,
					{
						color: currentColor?.color
					}
				]}
				numberOfLines={1}
			>
				{article?.description}
			</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	cardContainer: {
		height: 100,
		width: 165,
		borderRadius: 10,
		flexDirection: "column",
		paddingHorizontal: 10,
		justifyContent: "space-evenly"
	},
	articleTitle: {
		fontSize: 16.5,
		fontWeight: "500"
	},
	articleDescription: {
		fontWeight: "500"
	}
})

ArticleCard.propTypes = {
	article: PropTypes.object.isRequired,
	currentColor: PropTypes.object.isRequired
}
