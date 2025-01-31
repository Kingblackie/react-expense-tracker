import { TransactionContext } from '../context/TransactionContext'
import { useContext } from 'react'

const Transaction = ({ id, text, amount }) => {
	const { deleteTransaction } = useContext(TransactionContext)

	const sign = amount < 0 ? '-' : '+'
	return (
		<li className={amount < 0 ? 'minus' : 'plus'}>
			{text} 
			<span>{`${sign}${Math.abs(amount)}`}</span> 
			<button className='delete-btn' onClick={() => deleteTransaction(id)}>x</button>
		</li>
	)
}

export default Transaction