import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/nav-bar'
import PageWrapper from '@/components/page-wrapper'

const Home = () => {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <Hero />
      </PageWrapper>
      <Footer />
    </>
  )
}

export default Home
