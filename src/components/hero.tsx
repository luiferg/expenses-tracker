import SectionWrapper from './section-wrapper'
import { buttonVariants } from './ui/button'

const Hero = () => {
  return (
    <SectionWrapper
      id='hero'
      ariaLabel='Hero section'
      className='relative h-full'
    >
      <div className='bg-primary/60 h-[180px] w-[180px] md:h-[280px] md:w-[280px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 animate-pulse rounded-full' />
      <div className='z-10 flex flex-col gap-4 justify-center items-center backdrop-blur-3xl h-full w-full text-center'>
        <h1 className='text-5xl font-semibold'>Expenses tracker app</h1>
        <p className='text-xl'>
          Track your expenses and income. Add your transactions and see how much
          you have spent or earned.
        </p>
        <p>Keep an eye on your numbers anytime, anywhere.</p>
        <a className={buttonVariants({ variant: 'default' })} href='/login'>
          Get started
        </a>
      </div>
    </SectionWrapper>
  )
}

export default Hero
