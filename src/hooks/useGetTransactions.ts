import { db } from '@/config/firebase'
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useGetUserInfo } from './useGetUserInfo'

export const useGetTransactions = () => {
  const [transactions, setTransactions] = useState([])
  const [totalAmount, setTotalAmount] = useState({
    balance: 0.0,
    income: 0.0,
    expense: 0.0,
  })
  const { userID } = useGetUserInfo()
  const transactionCollectionRef = collection(db, 'transactions')
  const getTransactions = async () => {
    let unsubscribe: any
    try {
      const queryTransactions = query(
        transactionCollectionRef,
        where('userID', '==', userID),
        orderBy('transactionDate')
      )
      unsubscribe = onSnapshot(queryTransactions, (querySnapshot) => {
        let docs: any = []
        let income = 0
        let expense = 0

        querySnapshot.forEach((doc) => {
          const data = doc.data()
          const id = doc.id

          docs.push({ ...data, id })
          if (data.transactionType === 'income') {
            income += Number(data.transactionAmount)
          } else {
            expense += Number(data.transactionAmount)
          }
        })
        setTransactions(docs)
        let balance = income - expense
        setTotalAmount({ balance, income, expense })
      })
    } catch (error) {
      console.log(error)
    }
    return () => unsubscribe()
  }
  useEffect(() => {
    getTransactions()
  }, [])
  return { transactions, totalAmount }
}
