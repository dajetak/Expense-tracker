import { Link } from 'react-router'

export function NewTransactionPage() {
  return (
    <section className="page">
      <h2>Новая транзакция</h2>
      <div className="placeholder-box">
        <p>Форма добавления доходов и расходов появится в Лабораторной работе №3.</p>
        <p>Здесь можно будет ввести название, сумму, выбрать категорию и дату.</p>
      </div>
      <Link to="/transactions" className="btn-secondary">
        ← Вернуться к списку
      </Link>
    </section>
  )
}
