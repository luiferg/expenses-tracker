import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { format } from 'date-fns'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Card, CardContent, CardHeader } from './ui/card'
import SectionWrapper from './section-wrapper'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from './ui/calendar'

import { useCudTransaction } from '@/hooks/useCudTransaction'
import { Toaster } from './ui/sonner'
import { toast } from 'sonner'

const TransactionForm = () => {
  const { addTransaction } = useCudTransaction()
  const formSchema = z.object({
    description: z
      .string()
      .min(2, {
        message: 'Description must be at least 2 characters.',
      })
      .max(100, {
        message: 'Description must be at most 100 characters.',
      }),
    amount: z.coerce.number().positive({
      message: 'Amount must be a positive number.',
    }),
    type: z.enum(['income', 'expense']),
    category: z.enum([
      'work',
      'food',
      'bills',
      'transportation',
      'home',
      'car',
      'fun',
      'clothing',
      'health',
      'other',
    ]),
    date: z.date({
      required_error: 'Date is required.',
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: '',
      amount: 0.0,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      addTransaction({
        description: values.description,
        amount: values.amount,
        type: values.type,
        category: values.category,
        date: values.date,
      })

      toast.success('Transaction created successfully!', {
        description:
          'Your transaction was created and now you can see it in the list.',
        duration: 8000,
      })

      form.reset()
    } catch (err) {
      toast.error('Something went wrong!', {
        description: 'Your transaction was not created :(',
        duration: 8000,
      })
      console.log(err)
    }
  }

  return (
    <SectionWrapper id='transaction-form-section'>
      <Card>
        <CardHeader>
          <h2 className='text-2xl font-semibold'>Add a new transaction</h2>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='grid grid-cols-2 gap-8'
            >
              <FormField
                control={form.control}
                name='description'
                render={({ field }) => (
                  <FormItem className='col-span-2'>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder='Groceries' {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter a description for your transaction.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='amount'
                render={({ field }) => (
                  <FormItem className='col-span-2 md:col-span-1'>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='0,00'
                        step='0.10'
                        type='number'
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Enter the amount for your transaction.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='type'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select if is income or expense' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='income'>Income</SelectItem>
                        <SelectItem value='expense'>Expense</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Select the type of your transaction.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='category'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select a category' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='work'>Work</SelectItem>
                        <SelectItem value='bills'>Bills</SelectItem>
                        <SelectItem value='food'>Food</SelectItem>
                        <SelectItem value='transportation'>
                          Transportation
                        </SelectItem>
                        <SelectItem value='home'>Home</SelectItem>
                        <SelectItem value='car'>Car</SelectItem>
                        <SelectItem value='fun'>Fun</SelectItem>
                        <SelectItem value='clothing'>Clothing</SelectItem>
                        <SelectItem value='health'>Health</SelectItem>
                        <SelectItem value='other'>Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Select the category of your transaction.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='date'
                render={({ field }) => (
                  <FormItem className='col-span-2 md:col-span-1'>
                    <FormLabel>Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button className='w-full' variant='outline'>
                            {field.value ? (
                              format(field.value, 'PPP')
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className='ml-auto opacity-50 h-4 w-4' />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent>
                        <Calendar
                          mode='single'
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date('1900-01-01')
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription>
                      Select the date of your transaction.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type='submit' className='w-fit'>
                Submit
              </Button>
            </form>
          </Form>
          <Toaster richColors />
        </CardContent>
      </Card>
    </SectionWrapper>
  )
}

export default TransactionForm
