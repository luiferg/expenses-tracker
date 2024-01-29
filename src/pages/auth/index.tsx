import { auth, provider } from '@/config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Navbar from '@/components/nav-bar'
import PageWrapper from '@/components/page-wrapper'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Footer from '@/components/footer'

const Auth = () => {
  const navigate = useNavigate()

  const singInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider)
    const authInfo = {
      userID: results.user.uid,
      userName: results.user.displayName,
      userPhotoURL: results.user.photoURL,
      isAuth: true,
    }
    localStorage.setItem('auth', JSON.stringify(authInfo))
    navigate('/dashboard')
  }
  return (
    <>
      <Navbar />
      <PageWrapper className='h-screen flex items-center'>
        <Card>
          <CardHeader>
            <CardTitle>Sign In with Google</CardTitle>
          </CardHeader>
          <CardContent className='flex justify-center'>
            <Button onClick={singInWithGoogle}> Sign In</Button>
          </CardContent>
        </Card>
      </PageWrapper>
      <Footer />
    </>
  )
}

export default Auth
