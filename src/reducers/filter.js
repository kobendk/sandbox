export const filter1 = (state = "John Doe", action) => {
		switch (action.type) {
		case 'SET_FILTER':
			return action.filter
		default:
			return state
		}
}

export const filter2 = (state = "John Doe", action) => {
		switch (action.type) {
		case 'SET_FILTER':
			return action.filter
		default:
			return state
		}
}
