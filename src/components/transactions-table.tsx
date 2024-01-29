import { useGetTransactions } from '@/hooks/useGetTransactions'
import SectionWrapper from './section-wrapper'
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { ArrowUpDown, ChevronDown, MoreHorizontal } from 'lucide-react'
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
  const { transactions } = useGetTransactions()
  console.log(transactions)

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
