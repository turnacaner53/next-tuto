import React from 'react';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex h-full min-h-screen flex-col items-center justify-center space-y-6'>
      <div className='flex items-center'>
        <p className='mr-4 border-r-2 p-2 pr-4 text-4xl font-semibold'>404</p>
        <h1 className='text-2xl font-semibold'>This page could not be found.</h1>
      </div>
      <Link
        className='text-lg font-semibold text-blue-500 hover:text-blue-900 dark:hover:text-slate-500'
        href='/'>
        Go back to home
      </Link>
    </div>
  );
}
