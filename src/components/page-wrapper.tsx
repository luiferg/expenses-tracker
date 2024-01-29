interface PageWrapperProps {
  children: React.ReactNode
  className?: string
}

const PageWrapper = ({ children, className }: PageWrapperProps) => {
  return (
    <main className='w-full flex justify-center'>
      <div
        className={`${className} max-w-screen-xl w-full flex flex-col justify-center`}
      >
        {children}
      </div>
    </main>
  )
}

export default PageWrapper
