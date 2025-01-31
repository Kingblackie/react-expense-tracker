import AddTransaction from './components/AddTransaction'
import Balance from './components/Balance'
import Header from './components/Header'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import TransactionProvider from './context/TransactionContext'

const App = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <TransactionProvider>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </TransactionProvider>
      </div>
    </div>
  )
}

export default App