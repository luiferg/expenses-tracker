import { db } from '@/config/firebase'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore'
import { useGetUserInfo } from './useGetUserInfo'

interface TransactionProps {
  description: string
  amount: number
  type: string
  category: string
  date: Date
}

export const useCudTransaction = () => {
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

  const deleteTransaction = async (id: string) => {
    const transactionDocRef = doc(db, 'transactions', id)
    try {
      await deleteDoc(transactionDocRef)
    } catch (error) {
      console.log(error)
    }
  }

  return { addTransaction, deleteTransaction }
}
