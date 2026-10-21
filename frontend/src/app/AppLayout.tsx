import { NavLink, Outlet } from 'react-router'

export function AppLayout() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="brand">
          <span className="logo-icon">💰</span>
          <span className="brand-name">Expense Tracker</span>
        </div>
        <nav className="app-nav">
          <NavLink to="/transactions" end>
            Транзакции
          </NavLink>
          <NavLink to="/transactions/new">
            + Создать
          </NavLink>
        </nav>
      </header>

      <main className="app-content">
        <Outlet />
      </main>

      <footer className="app-footer">
        <p>Expense Tracker — ПГУ им. Т.Г. Шевченко, ФТИ 2026</p>
      </footer>
    </div>
  )
}
