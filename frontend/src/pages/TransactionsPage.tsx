import { Link } from 'react-router'
import { TransactionCard } from '../components/TransactionCard'
import { transactions } from '../data/transactions'

export function TransactionsPage() {
  return (
    <section className="page">
      <div className="page-header">
        <h2>Мои транзакции</h2>
        <Link to="/transactions/new" className="btn-primary">
          + Добавить запись
        </Link>
      </div>

      {transactions.length === 0 ? (
        <p className="empty-message">Записей пока нет.</p>
      ) : (
        <div className="transaction-list">
          {transactions.map((item) => (
            <TransactionCard key={item.id} transaction={item} />
          ))}
        </div>
      )}
    </section>
  )
}
