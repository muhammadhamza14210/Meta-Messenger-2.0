'use client';
import { signOut } from 'next-auth/react';

const LogoutButton = () => {
  return (
    <button onClick={()=> signOut()} className='text-white bg-blue-500 hover:bg-blue-700
    font-bold rounded px-4 py-2'>Sign Out</button>
  )
}

export default LogoutButton