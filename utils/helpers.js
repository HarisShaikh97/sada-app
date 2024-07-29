import * as SecureStore from "expo-secure-store"

export const setAccessToken = async (accessToken) => {
	try {
		await SecureStore.setItemAsync("accessToken", accessToken)
	} catch (error) {
		console.error("Error storing access token:", error)
	}
}

export const getAccessToken = async () => {
	try {
		const accessToken = await SecureStore.getItemAsync("accessToken")
		return accessToken
	} catch (error) {
		console.error("Error retrieving access token:", error)
	}
}

export const deleteAccessToken = async () => {
	try {
		await SecureStore.deleteItemAsync("accessToken")
	} catch (error) {
		console.error("Error deleting access token:", error)
	}
}
