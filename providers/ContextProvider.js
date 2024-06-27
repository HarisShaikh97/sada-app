"use client"

import { useReducer } from "react"
import PropTypes from "prop-types"
import { AppContext } from "../context/context"
import { reducer } from "../context/reducer"

export function ContextProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, {
		accessToken: null,
		signupUser: null
	})

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	)
}

ContextProvider.propTypes = {
	children: PropTypes.node.isRequired
}
