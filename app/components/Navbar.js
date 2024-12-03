import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-16 bg-purple-700 flex justify-between items-center text-white px-3'>
        <div className='text-xl font-bold'>BitLinks</div>
        <ul className='flex justify-center items-center gap-4'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/shorten"><li>Shorten</li></Link>
            <Link href="/contact"><li>Contact Us</li></Link>
            <li className='flex gap-3'>
                <Link href="/generate"><button className='bg-purple-500 shadow-lg font-semibold rounded-md px-2 py-1'>Try Now</button></Link>
                <Link href="/github"><button className='bg-purple-500 shadow-lg font-semibold rounded-md px-2 py-1'>GitHub</button></Link>
            </li>
                    
                    </ul>
    </nav>
  )
}

export default Navbar