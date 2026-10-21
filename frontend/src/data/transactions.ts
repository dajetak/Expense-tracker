import type { Transaction } from '../types/transaction'

export const transactions: Transaction[] = [
  {
    id: 't1',
    title: 'Покупка продуктов в супермаркете',
    description: 'Закупка еды и бытовой химии на неделю.',
    amount: 1450,
    type: 'expense',
    category: 'Еда',
    date: '2026-10-01',
  },
  {
    id: 't2',
    title: 'Аванс по зарплате',
    description: 'Основная выплата за первую половину месяца.',
    amount: 15000,
    type: 'income',
    category: 'Зарплата',
    date: '2026-10-02',
  },
  {
    id: 't3',
    title: 'Заправка автомобиля',
    description: 'Полный бак АИ-95.',
    amount: 2100,
    type: 'expense',
    category: 'Транспорт',
    date: '2026-10-04',
  },
  {
    id: 't4',
    title: 'Оплата интернета и ТВ',
    description: 'Ежемесячный абонентский платёж по тарифу.',
    amount: 450,
    type: 'expense',
    category: 'Жильё',
    date: '2026-10-05',
  },
  {
    id: 't5',
    title: 'Фриланс заказ по веб-дизайну',
    description: 'Разработка макета баннера для клиента.',
    amount: 3500,
    type: 'income',
    category: 'Подработки',
    date: '2026-10-06',
  },
]
