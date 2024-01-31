import { TransactionProps } from '@/types'
import 'chart.js/auto'
import { Pie } from 'react-chartjs-2'

const PieChart = ({ data }: { data: TransactionProps[] }) => {
  if (!data || data.length === 0) return null

  const categorySums: { [key: string]: number } = {}

  data.forEach((item) => {
    const category =
      item.transactionCategory.charAt(0).toUpperCase() +
      item.transactionCategory.slice(1)
    if (categorySums[category]) {
      categorySums[category] += item.transactionAmount
    } else {
      categorySums[category] = item.transactionAmount
    }
  })

  const categories = Object.keys(categorySums)
  const amounts = Object.values(categorySums)
  const pieData = {
    labels: categories,
    datasets: [
      {
        label: 'Money spent',
        data: amounts,
        backgroundColor: [
          'rgb(240, 15, 10, 0.2)',
          'rgba(255, 105, 150, 0.2)',
          'rgb(255, 99, 10, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgb(255, 255, 10, 0.2)',
        ],
        borderColor: [
          'rgb(240, 15, 10, 1)',
          'rgba(255, 105, 150, 1)',
          'rgb(255, 99, 10, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgb(255, 255, 10, 1)',
        ],
        borderWidth: 1.5,
      },
    ],
  }
  if (data)
    return (
      <div className='flex flex-col gap-4 items-center justify-center'>
        <h2 className='text-lg font-bold'>Expenses by Category</h2>
        <Pie
          id='pie'
          options={{ responsive: true }}
          data={pieData}
          className='max-w-[200px] max-h-[200px]'
        />
      </div>
    )
}

export default PieChart
