import { signOut } from 'firebase/auth'
import { Button } from './ui/button'
import { auth } from '@/config/firebase'
import { useNavigate } from 'react-router-dom'

const SignOutButton = () => {
  const navigate = useNavigate()
  const signUserOut = async () => {
    try {
      await signOut(auth)
      localStorage.clear()
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Button variant='destructive' onClick={signUserOut}>
      Sign Out
    </Button>
  )
}

export default SignOutButton
