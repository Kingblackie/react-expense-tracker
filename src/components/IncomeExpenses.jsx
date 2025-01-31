import { TransactionContext } from '../context/TransactionContext'
import { useContext } from 'react'

const IncomeExpenses = () => {
	const { transactions } = useContext(TransactionContext)	
	const income = transactions
		.filter((transaction) => transaction.amount > 0)
		.reduce((acc, { amount }) => acc + amount, 0)
		.toFixed(2)
	const expenses = transactions
		.filter((transaction) => transaction.amount < 0)
		.reduce((acc, { amount }) => acc + amount, 0)
		.toFixed(2)

	return (
		<div className='inc-exp-container'>
			<div>
				<h4>Income</h4>
				<p className='money plus'>#{income}</p>
			</div>
			<div>
				<h4>Expenses</h4>
				<p className='money minus'>#{Math.abs(expenses)}</p>
			</div>
		</div>
	)
}

export default IncomeExpenses