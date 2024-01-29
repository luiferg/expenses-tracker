import Navbar from '@/components/nav-bar'
import PageWrapper from '@/components/page-wrapper'
import Footer from '@/components/footer'
import TransactionForm from '@/components/transaction-form'
import TransactionsTable from '@/components/transactions-table'

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <PageWrapper className='min-h-screen flex flex-col gap-8 lg:gap-10 items-center'>
        <h1 className='text-4xl'>Expenses Tracker Dashboard</h1>
        <TransactionForm />
        <TransactionsTable />
      </PageWrapper>
      <Footer />
    </>
  )
}

export default Dashboard
