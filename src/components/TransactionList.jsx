import { TransactionContext } from '../context/TransactionContext'
import { useContext } from 'react'
import Transaction from './Transaction'

const TransactionList = () => {
	const { transactions } = useContext(TransactionContext)

	return (
		<>
			<h3>History</h3>
			<ul className='list'>
				{transactions.map((transaction) => (
					<Transaction key={transaction.id} {...transaction} />
				))}
			</ul>
		</>
	)
}
 
export default TransactionList