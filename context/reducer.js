export const reducer = (state, action) => {
	switch (action.type) {
		case "SET_SIGNUP_USER": {
			return { ...state, signupUser: action?.payload }
		}
		default:
			return state
	}
}
