import { ModeToggle } from './mode-toggle'
import { buttonVariants } from './ui/button'

const Navbar = () => {
  return (
    <div className='flex justify-center backdrop-blur-lg w-full'>
      <div className='flex justify-between items-center p-4 max-w-screen-xl w-full'>
        <div></div>
        <div className='flex items-center gap-4'>
          <nav>
            <ul className='flex items-center gap-4'>
              <li>
                <a href='/dashboard'>Dashboard</a>
              </li>
              <li>
                <a
                  className={buttonVariants({ variant: 'default' })}
                  href='/login'
                >
                  Log In
                </a>
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
