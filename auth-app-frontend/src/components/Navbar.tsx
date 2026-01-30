import { Button } from './ui/button'
import { NavLink } from 'react-router'

function Navbar() {
  return (
   <nav className='sticky top-0 z-50 bg-background py-4 border-b dark:border-gray-600 md:p-0 flex md:flex-row gap-40 md:gap-4 flex-col md:h-14 justify-around items-center'>
    {/* Brand */}
    <div className='font-semibold flex items-center gap-2'>
        <span className='inline-block text-center h-6 w-6 rounded-md bg-gradient-to-r from-primary to-primary/40'>A</span>
        <NavLink to={'/' } className='flex items-center gap-2'>
            <span className='text-base tracking-tight'>Auth App</span>
        </NavLink>
    </div>

    <div className='flex items-center gap-4'>
        <NavLink to={'/'}>
            Home
        </NavLink>
        <NavLink to={'/login'}>
             <Button size={'sm'} className='cursor-pointer' variant={'outline'}>
            Login
            </Button>
        </NavLink>
        <NavLink to={'/signup'}>
            <Button size={'sm'} className='cursor-pointer' variant={'outline'}>
            Signup
            </Button>
        </NavLink>
    </div>
   </nav>
  )
}

export default Navbar