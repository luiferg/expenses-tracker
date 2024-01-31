import { useNavigate } from 'react-router-dom'
import { useGetUserInfo } from '@/hooks/useGetUserInfo'
import { useEffect } from 'react'
import Hero from '@/components/hero'
import PageWrapper from '@/components/page-wrapper'

const Home = () => {
  const navigate = useNavigate()
  const { userID } = useGetUserInfo()
  useEffect(() => {
    if (userID) {
      navigate('/dashboard')
    }
  }, [userID, navigate])

  if (userID) {
    return null
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
