import { Link } from 'react-router'

export function NotFoundPage() {
  return (
    <section className="page error-page">
      <h2>404 — Страница не найдена</h2>
      <p>Запрошенный адрес не существует или был перемещён.</p>
      <Link to="/transactions" className="btn-primary">
        Перейти к списку транзакций
      </Link>
    </section>
  )
}
