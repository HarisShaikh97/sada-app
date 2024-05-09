import { View, Image, StyleSheet } from "react-native"
import PropTypes from "prop-types"

export default function LogoCircle({ size, color, backgroundColor }) {
	return (
		<View
			style={[
				styles.logoContainer,
				{
					height: size,
					width: size,
					borderRadius: size / 2,
					backgroundColor: backgroundColor
				}
			]}
		>
			<Image
				source={
					color === "pink"
						? require("../../assets/icons/logo-pink.png")
						: require("../../assets/icons/logo-purple.png")
				}
				style={styles.logo}
				alt="logo"
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	logoContainer: {
		alignItems: "center",
		justifyContent: "center"
	},
	logo: {
		height: "100%",
		width: "100%"
	}
})

LogoCircle.propTypes = {
	size: PropTypes.number.isRequired,
	color: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string.isRequired
}
