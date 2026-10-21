export type TransactionType = 'expense' | 'income'

export type TransactionCategory = 
  | 'Еда' 
  | 'Транспорт' 
  | 'Жильё' 
  | 'Развлечения' 
  | 'Зарплата' 
  | 'Подработки' 
  | 'Другое'

export type Transaction = {
  id: string
  title: string
  description: string
  amount: number
  type: TransactionType
  category: TransactionCategory
  date: string // Формат YYYY-MM-DD
}
