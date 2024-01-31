import { Navigate } from 'react-router-dom'
import { useGetUserInfo } from '@/hooks/useGetUserInfo'
import Hero from '@/components/hero'
import PageWrapper from '@/components/page-wrapper'

const Home = () => {
  const { isAuth } = useGetUserInfo()

  if (isAuth) {
    return <Navigate to='/dashboard' />
  }
  return (
    <>
      <PageWrapper>
        <Hero />
      </PageWrapper>
    </>
  )
}

export default Home
