import { ModeToggle } from './mode-toggle'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <div className='flex justify-center backdrop-blur-lg w-full fixed top-0'>
      <div className='flex justify-between items-center p-4 max-w-screen-xl w-full'>
        <div></div>
        <div className='flex items-center gap-4'>
          <nav>
            <ul className='flex items-center gap-4'>
              <li>
                <a href='/projects'>Source code</a>
              </li>
              <li>
                <a href='/contact'>Contact</a>
              </li>
              <li>
                <Button>Log In</Button>
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
