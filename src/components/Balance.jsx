import { TransactionContext } from '../context/TransactionContext'
import { useContext } from 'react'

const Balance = () => {
	const { transactions } = useContext(TransactionContext)
	
	const balance = transactions
		.reduce((acc, { amount }) => acc + amount, 0)
		.toFixed(2)

	return (
		<div className='balance'>
			<h4>Your Balance</h4>
			<h1>{balance < 0 ? `-#${Math.abs(balance)}` : `#${balance}`}</h1>
		</div>
	)
}

export default Balance