import { Link, useParams } from 'react-router'
import { transactions } from '../data/transactions'

export function TransactionDetailsPage() {
  const { id } = useParams()
  const transaction = transactions.find((item) => item.id === id)

  if (!transaction) {
    return (
      <section className="page error-page">
        <h2>Запись не найдена</h2>
        <p>Транзакция с идентификатором «{id}» отсутствует в базе данных.</p>
        <Link to="/transactions" className="btn-secondary">
          ← К списку транзакций
        </Link>
      </section>
    )
  }

  const isIncome = transaction.type === 'income'

  return (
    <section className="page details-page">
      <div className="details-card">
        <h2>{transaction.title}</h2>
        <p className="details-type">
          Тип операции: <strong>{isIncome ? 'Доход' : 'Расход'}</strong>
        </p>

        <div className="details-amount">
          Сумма:{' '}
          <span className={isIncome ? 'income-text' : 'expense-text'}>
            {isIncome ? '+' : '-'}{transaction.amount} ₽
          </span>
        </div>

        <div className="details-info">
          <p><strong>Категория:</strong> {transaction.category}</p>
          <p><strong>Дата операции:</strong> {transaction.date}</p>
          <p><strong>Описание:</strong> {transaction.description}</p>
          <p><strong>ID записи:</strong> <code>{transaction.id}</code></p>
        </div>

        <Link to="/transactions" className="btn-secondary">
          ← Вернуться к списку
        </Link>
      </div>
    </section>
  )
}
