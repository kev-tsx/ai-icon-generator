import React, { useState } from 'react'
import { Bot, ThemeMode } from '@ui';
import Link from 'next/link';
import { useRouter } from 'next/router';
// aww.default
export const Navbar = () => {

  const [ mode, setMode ] = useState<'light' | 'dark'>('dark');
  const router = useRouter(); 

  return (
    <nav className='p-5 rounded-b-md shadow-md flex justify-around items-center gap-4 mb-20'>
      {/* eslint-disable */}
      <div 
        className='flex flex-col items-center cursor-pointer' 
        onClick={() => router.push('/')}
      >
        <Bot />
        <h1 className='font-mono'>Icon-AI</h1>
      </div>

      <div className='flex gap-5'>
        <Link href="/generate">Generate</Link>
        <h1>Collection</h1>
      </div>

      <div className='flex gap-20'>
        <div className='flex items-center gap-4'>
          <p>0 credits</p>
          <button
            className="bg-blue-500 text-white rounded-md px-4 py-2"
          >Buy credits</button>
          <button
            className="bg-blue-500 text-white rounded-md px-4 py-2"
          >Sign in</button>
        </div>

        <div>
          <button
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          >
            <ThemeMode mode={mode} />
          </button>
        </div>
      </div>

    </nav>
  )
}