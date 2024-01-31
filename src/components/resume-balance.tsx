import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

interface TotalAmountProps {
  totalAmount: {
    balance: number
    income: number
    expense: number
  }
}

const ResumeBalance = ({ totalAmount }: TotalAmountProps) => {
  return (
    <Card className='flex flex-col md:col-span-2 justify-center'>
      <CardHeader className='flex flex-col gap-1'>
        <CardTitle>Resume Balance</CardTitle>
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
