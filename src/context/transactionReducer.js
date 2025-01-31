const transactionReducer = (state, action) => {
	switch (action.type) {
		case 'added_transaction':
			return [action.payload,...state]
		case 'deleted_transaction':
			return state.filter((item) => item.id !== action.payload)
		default: 
			return state
	}
}

export default transactionReducer