import { ThemeProvider } from '@/components/theme-provider'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Auth from './pages/auth'
import Dashboard from './pages/dashboard'

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Auth />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
