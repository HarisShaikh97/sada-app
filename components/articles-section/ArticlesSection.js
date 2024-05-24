import { View, ScrollView, Text, StyleSheet } from "react-native"
import PropTypes from "prop-types"
import ArticleCard from "../article-card/ArticleCard"
import { colors } from "../../utils/constants"

export default function ArticlesSection({ articles }) {
	return (
		<View style={styles.sectionContainer}>
			<Text style={styles.titleText}>Curated Articles for You</Text>
			<ScrollView
				style={styles.horizontalScrollView}
				horizontal
				showsHorizontalScrollIndicator={false}
			>
				<View style={styles.horizontalScrollContainer}>
					{articles?.map((item, key) => {
						const currentColor = colors[(key + 3) % colors?.length]
						return (
							<ArticleCard
								article={item}
								currentColor={currentColor}
								key={key}
							/>
						)
					})}
				</View>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	titleText: {
		fontSize: 20,
		fontWeight: "500",
		marginLeft: 25
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
	}
})

ArticlesSection.propTypes = {
	articles: PropTypes.array.isRequired
}
