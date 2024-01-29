import SectionWrapper from './section-wrapper'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <SectionWrapper
      id='hero'
      ariaLabel='Hero section'
      className='flex flex-col gap-4 text-center items-center'
    >
      <h1 className='text-5xl font-semibold'>Expenses tracker app</h1>
      <p className='text-xl'>
        Track your expenses and income. Add your transactions and see how much
        you have spent or earned.
      </p>
      <p>Keep an eye on your numbers anytime, anywhere.</p>
      <Button className='w-fit'>Get started</Button>
    </SectionWrapper>
  )
}

export default Hero
