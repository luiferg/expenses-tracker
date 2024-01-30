import Footer from './footer'
import Navbar from './nav-bar'

interface PageWrapperProps {
  children: React.ReactNode
  className?: string
}

const PageWrapper = ({ children, className }: PageWrapperProps) => {
  return (
    <main className='w-full flex justify-center'>
      <div
        className={`${className} min-h-[100dvh] max-w-screen-xl w-full flex flex-col justify-between`}
      >
        <Navbar />
        {children}
        <Footer />
      </div>
    </main>
  )
}

export default PageWrapper
