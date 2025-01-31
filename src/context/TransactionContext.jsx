import { createContext, useEffect, useReducer } from 'react'
import transactionReducer from './transactionReducer'

const initialState = [
	{ id: 1, text: 'Flower', amount: -20 },
	{ id: 2, text: 'Salary', amount: 4000 },
	{ id: 3, text: 'Groceries', amount: -390 },
	{ id: 4, text: 'Camera', amount: -299 },
]

const TransactionContext = createContext(initialState)

const TransactionProvider = ({ children }) => {
	const [state, dispatch] = useReducer(transactionReducer, JSON.parse(localStorage.getItem('transaction-state')) || [])

	useEffect(() => {
		localStorage.setItem('transaction-state', JSON.stringify(state))
	}, [state])

	const deleteTransaction = (id) => {
		dispatch({ type: 'deleted_transaction', payload: id })
	}

	const addTransaction = (transaction) => {
		dispatch({ type: 'added_transaction', payload: transaction })
	}

	return (
		<TransactionContext.Provider value={{
			transactions: state,
			addTransaction,
			deleteTransaction
		}}>
			{children}
		</TransactionContext.Provider>
	)
}

export { TransactionProvider as default, TransactionContext }