import './App.css'

const appTitle: string = 'Expense Tracker'

export default function App() {
  return (
	  <main className="app">
	  <header>
	  <h1>{appTitle}</h1>
	  <p>Учет доходов, расходов и личного бюджета.</p>
	  </header>
	  <section aria-labelleby="items-title">
	  <h2 id="items-title">Мои записи</h2>
	  <p>Здесь появится список ваших доходов и расходов.</p>
	  </section>
	  </main>
  )
}

