import SectionWrapper from './section-wrapper'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'

const TransactionsTable = () => {
  return (
    <SectionWrapper id='transactions-table'>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Description</TableHead>
            <TableHead className='w-[100px]'>Amount</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Type</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    </SectionWrapper>
  )
}

export default TransactionsTable
