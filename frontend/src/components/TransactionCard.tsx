import { Link } from 'react-router'
import type { Transaction } from '../types/transaction'

type TransactionCardProps = {
  transaction: Transaction
}

export function TransactionCard({ transaction }: TransactionCardProps) {
  const isIncome = transaction.type === 'income'

  return (
    <div className={`transaction-card ${transaction.type}`}>
      <div className="card-header">
        <h3>{transaction.title}</h3>
        <span className={`amount ${isIncome ? 'income-text' : 'expense-text'}`}>
          {isIncome ? '+' : '-'}{transaction.amount} ₽
        </span>
      </div>

      <p className="description">{transaction.description}</p>

      <div className="card-footer">
        <span className="badge">{transaction.category}</span>
        <span className="date">Дата: {transaction.date}</span>
        <Link to={`/transactions/${transaction.id}`} className="details-link">
          Подробнее →
        </Link>
      </div>
    </div>
  )
}
