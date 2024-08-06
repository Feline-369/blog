import { Navbar } from 'flowbite-react'
import { Link } from 'flowbite-react'
import React from 'react'

export default function Header() {
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <span>Feline's</span>
            Blog

        </Link>
    </Navbar>
  )
}
