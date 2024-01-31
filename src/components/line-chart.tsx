import { TransactionProps } from '@/types'
import 'chart.js/auto'
import { Line } from 'react-chartjs-2'

const LineChart = ({ data }: { data?: TransactionProps[] }) => {
  if (!data || data.length === 0) return null

  console.log(data, 'from linechart')

  const currentMonth = new Date().getMonth()
  const currentYear = new Date().getFullYear()

  const filterDataByMonthAndType = (type: string) => {
    // Create a new date object for the first day of the current month
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1)

    // Format this date to match the format of the transaction dates in your data set
    const formattedFirstDayOfMonth = firstDayOfMonth.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })

    return data
      .filter(
        (transaction) =>
          new Date(transaction.transactionDate).getMonth() === currentMonth &&
          transaction.transactionType === type
      )
      .reduce(
        (acc, curr) => {
          const date = curr.transactionDate
          if (!acc[date]) {
            acc[date] = curr.transactionAmount
          } else {
            acc[date] += curr.transactionAmount
          }
          return acc
        },
        { [formattedFirstDayOfMonth]: 0 } as { [key: string]: number }
      ) // Initialize the accumulator with the first day of the month and 0 as its value
  }

  const incomeData = filterDataByMonthAndType('income')
  const expenseData = filterDataByMonthAndType('expense')

  const allDates = [...Object.keys(incomeData), ...Object.keys(expenseData)]
  const uniqueDates = Array.from(new Set(allDates))
  uniqueDates.sort()

  function prepareData(
    data: Record<string, number>
  ): { x: string; y: number }[] {
    const totals: Record<string, number> = {}

    for (const [day, amount] of Object.entries(data)) {
      if (totals[day]) {
        totals[day] += amount
      } else {
        totals[day] = amount
      }
    }

    return Object.entries(totals).map(([x, y]) => ({ x, y }))
  }

  console.log(prepareData(incomeData), 'from linechart')

  const chartData = {
    labels: uniqueDates,
    datasets: [
      {
        tension: 0.3,
        fill: true,
        label: 'Income',
        data: prepareData(incomeData),
        backgroundColor: 'rgba(60,200,30,0.2)',
        borderColor: 'rgba(60,200,30,1)',
        borderWidth: 1.5,
      },
      {
        tension: 0.3,
        fill: true,
        label: 'Expense',
        data: prepareData(expenseData),
        backgroundColor: 'rgba(240, 15, 10,0.2)',
        borderColor: 'rgba(240, 15, 10,1)',
        borderWidth: 1.5,
      },
    ],
  }

  return (
    <div className='flex flex-col gap-4 items-center'>
      <h2 className='text-lg font-bold'>Current month transactions totals</h2>
      <Line options={{ responsive: true }} data={chartData} />
    </div>
  )
}

export default LineChart
