import { Card, CardContent, CardHeader } from './ui/card'

interface TotalAmountProps {
  totalAmount: {
    balance: number
    income: number
    expense: number
  }
}

const ResumeBalance = ({ totalAmount }: TotalAmountProps) => {
  return (
    <Card>
      <CardHeader className='flex flex-col gap-1'>
        <h2 className='text-2xl'>Resume Balance</h2>
        <span className='text-3xl font-bold'>
          ${totalAmount.balance.toFixed(2)}
        </span>
      </CardHeader>
      <CardContent className='grid grid-cols-2 gap-10 w-fit'>
        <div className='flex flex-col gap-1 text-primary'>
          <span className='text-xl'>Income</span>
          <span className='text-xl font-bold'>
            ${totalAmount.income.toFixed(2)}
          </span>
        </div>
        <div className='flex flex-col gap-1 text-destructive dark:text-red-700'>
          <span className='text-xl'>Expense</span>
          <span className='text-xl font-bold'>
            ${totalAmount.expense.toFixed(2)}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

export default ResumeBalance
