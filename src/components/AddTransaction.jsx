import { toast } from 'react-toastify'
import { useState, useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'

const AddTransaction = () => {
	const { addTransaction } = useContext(TransactionContext)

	const [text, setText] = useState('')
	const [amount, setAmount] = useState(0)

	const handleSubmit = (e) => {
		e.preventDefault()

		if (!text || amount === 0) {
			toast.error('Pleae enter an item with an amount to track', {
				autoClose: 2500,
				theme: 'colored'
			})
			return
		}

		const newTransaction = { id: self.crypto.randomUUID(), text, amount: parseFloat(amount) } 
		addTransaction(newTransaction)
		
		setText('')
		setAmount(0)
	}

	return (
		<>
			<h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input 
						type='text' 
						placeholder='Enter text...' 
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
						Amount <br />
            (negative - expense, positive - income) 
					</label>
          <input 
						type='number' 
						placeholder='Enter amount...' 
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
					/>
        </div>
        <button className='btn'>Add transaction</button>
      </form>
		</>
	)
}

export default AddTransaction