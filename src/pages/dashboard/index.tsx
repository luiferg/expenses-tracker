import Navbar from '@/components/nav-bar'
import PageWrapper from '@/components/page-wrapper'
import Footer from '@/components/footer'
import TransactionForm from '@/components/transaction-form'
import { TransactionTable } from '@/components/transactions-table'
import { useGetTransactions } from '@/hooks/useGetTransactions'
import { TransactionProps } from '@/types'
import PieChart from '@/components/pie-chart'
import UserInfo from '@/components/user-info'
import { useGetUserInfo } from '@/hooks/useGetUserInfo'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Dashboard = () => {
  const navigate = useNavigate()
  const { userID } = useGetUserInfo()
  useEffect(() => {
    if (!userID) {
      navigate('/login')
    }
  }, [userID, navigate])

  if (!userID) {
    return null
  }

  const { transactions } = useGetTransactions()
  const data = (transactions as TransactionProps[]).map((transaction) => ({
    id: transaction.id,
    transactionAmount: transaction.transactionAmount,
    transactionCategory: transaction.transactionCategory,
    transactionDate: transaction.transactionDate
      .toDate()
      .toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
    transactionType: transaction.transactionType,
    transactionDescription: transaction.transactionDescription,
  }))

  return (
    <>
      <Navbar />
      <PageWrapper className='min-h-screen flex flex-col gap-4 lg:gap-10 items-center'>
        <h1 className='text-4xl'>Expenses Tracker Dashboard</h1>
        <UserInfo />
        <TransactionForm />
        <TransactionTable data={data} />
        <PieChart
          data={data.filter(
            (transaction) => transaction.transactionType === 'expense'
          )}
        />
      </PageWrapper>
      <Footer />
    </>
  )
}

export default Dashboard
