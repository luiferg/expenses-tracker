import { useGetUserInfo } from '@/hooks/useGetUserInfo'
import { ModeToggle } from './mode-toggle'
import SignOutButton from './sign-out-button'
import { buttonVariants } from './ui/button'

const Navbar = () => {
  const { userID } = useGetUserInfo()
  return (
    <div className='flex justify-center backdrop-blur-lg w-full'>
      <div className='flex justify-between items-center p-4 max-w-screen-xl w-full'>
        <div></div>
        <div className='flex items-center gap-4'>
          <nav>
            <ul className='flex items-center gap-4'>
              <li>
                {userID && <SignOutButton />}
                {!userID && (
                  <a
                    className={buttonVariants({ variant: 'default' })}
                    href='/login'
                  >
                    Sign In
                  </a>
                )}
              </li>
            </ul>
          </nav>
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}

export default Navbar
