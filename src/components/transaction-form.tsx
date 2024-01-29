import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
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
import { Card, CardContent, CardHeader } from './ui/card'
import SectionWrapper from './section-wrapper'

const TransactionForm = () => {
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
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: '',
      amount: 0.0,
      type: 'income',
      category: 'other',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
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
                  <FormItem className='col-span-2 md:col-span-1'>
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
                        step='0.01'
                        type='number'
                        {...field}
                        required
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
                        <SelectItem value='food'>Food</SelectItem>
                        <SelectItem value='bills'>Bills</SelectItem>
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
              <Button type='submit' className='w-fit'>
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </SectionWrapper>
  )
}

export default TransactionForm
