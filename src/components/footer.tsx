import { Github, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='flex justify-center backdrop-blur-lg w-full fixed bottom-0'>
      <div className='flex justify-between items-center p-4 max-w-screen-xl w-full'>
        <ul className='flex items-center gap-4'>
          <li>
            <a
              target='_blank'
              href='https://github.com/luiferg'
              aria-label='Link to repository'
            >
              <Github />
            </a>
          </li>
          <li>
            <a
              target='_blank'
              href='mailto:luisfgomezortiz@gmail.com'
              aria-label='Link to email'
            >
              <Mail />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
