import { TransactionProps } from '@/types'
import SectionWrapper from './section-wrapper'
import 'chart.js/auto'
import { Pie } from 'react-chartjs-2'

const PieChart = ({ data }: { data: TransactionProps[] }) => {
  if (!data) return null

  const categories = data.map(
    (item) =>
      item.transactionCategory.charAt(0).toUpperCase() +
      item.transactionCategory.slice(1)
  )

  const amount = data.map((item) => item.transactionAmount)

  const pieData = {
    labels: categories,
    datasets: [
      {
        label: 'Money spent',
        data: amount,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgb(255, 99, 10, 0.2)',
          'rgb(255, 255, 10, 0.2)',
          'rgb(0, 255, 10, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgb(255, 99, 10, 1)',
          'rgb(255, 255, 10, 1)',
          'rgb(0, 255, 10, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <SectionWrapper id='graphics-section'>
      <Pie
        id='pie'
        data={pieData}
        height={400}
        width={400}
        className=' md:max-w-[440px] md:max-h-[440px]'
      />
    </SectionWrapper>
  )
}

export default PieChart
