import { db } from '@/config/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useGetUserInfo } from './useGetUserInfo'

interface TransactionProps {
  description: string
  amount: number
  type: string
  category: string
  date: Date
}

export const useAddTransaction = () => {
  const addTransaction = async ({
    description,
    amount,
    type,
    category,
    date,
  }: TransactionProps) => {
    const transactionCollectionRef = collection(db, 'transactions')
    const { userID } = useGetUserInfo()
    await addDoc(transactionCollectionRef, {
      userID,
      transactionDescription: description,
      transactionAmount: amount,
      transactionType: type,
      transactionCategory: category,
      transactionDate: date,
      createdAt: serverTimestamp(),
    })
  }
  return { addTransaction }
}
