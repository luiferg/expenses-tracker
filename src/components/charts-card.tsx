import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import LineChart from './line-chart'
import PieChart from './pie-chart'
import { TransactionProps } from '@/types'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const ChartsCard = ({ data }: { data?: TransactionProps[] }) => {
  if (!data || data.length === 0) return <div>No transactions yet!</div>
  return (
    <Card>
      <CardHeader>
        <CardTitle>Graphics</CardTitle>
      </CardHeader>
      <CardContent>
        <Carousel>
          <CarouselContent>
            <CarouselItem className='flex items-center justify-center'>
              <LineChart data={data} />
            </CarouselItem>
            <CarouselItem>
              <PieChart
                data={data.filter(
                  (transaction) => transaction.transactionType === 'expense'
                )}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className='-left-4' />
          <CarouselNext className='-right-4' />
        </Carousel>
      </CardContent>
    </Card>
  )
}

export default ChartsCard
