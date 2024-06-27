import { Stack } from "expo-router"
import { RootSiblingParent } from "react-native-root-siblings"
import { ContextProvider } from "../providers/ContextProvider"

export default function Layout() {
	return (
		<RootSiblingParent>
			<ContextProvider>
				<Stack screenOptions={{ headerShown: false }} />
			</ContextProvider>
		</RootSiblingParent>
	)
}
