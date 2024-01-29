import { ThemeProvider } from '@/components/theme-provider'
import Navbar from './components/nav-bar'
import Hero from './components/hero'
import Footer from './components/footer'

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Navbar />
      <div className='w-full flex justify-center'>
        <div className='max-w-screen-xl w-full flex flex-col justify-center h-screen'>
          <Hero />
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  )
}

export default App
