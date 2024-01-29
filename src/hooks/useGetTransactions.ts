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
        querySnapshot.forEach((doc) => {
          const data = doc.data()
          const id = doc.id

          docs.push({ ...data, id })
        })
        setTransactions(docs)
      })
    } catch (error) {
      console.log(error)
    }
    return () => unsubscribe()
  }
  useEffect(() => {
    getTransactions()
  }, [])
  return { transactions }
}
