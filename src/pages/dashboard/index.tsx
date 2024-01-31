import PageWrapper from '@/components/page-wrapper'
import TransactionForm from '@/components/transaction-form'
import { TransactionTable } from '@/components/transactions-table'
import { useGetTransactions } from '@/hooks/useGetTransactions'
import { TransactionProps } from '@/types'
import UserInfo from '@/components/user-info'
import { useGetUserInfo } from '@/hooks/useGetUserInfo'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import ResumeBalance from '@/components/resume-balance'
import SectionWrapper from '@/components/section-wrapper'
import ChartsCard from '@/components/charts-card'

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

  const { transactions, totalAmount } = useGetTransactions()
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
      <PageWrapper className='min-h-screen flex flex-col items-center'>
        <h1 className='text-3xl'>Expenses Tracker Dashboard</h1>
        <UserInfo />
        <SectionWrapper
          id='resume-balance'
          className='grid grid-cols-1 md:grid-cols-3 gap-8'
        >
          <ResumeBalance totalAmount={totalAmount} />
          <ChartsCard data={data} />
        </SectionWrapper>
        <TransactionForm />
        <TransactionTable data={data} />
      </PageWrapper>
    </>
  )
}

export default Dashboard
