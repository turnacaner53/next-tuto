import React from 'react';

import { Spinner } from '@/components/ui/spinner';

export default function Loading() {
  return (
    <div className='flex flex-col space-y-6 min-h-screen items-center justify-center'>
      <h1 className='text-2xl'>Loading</h1>
      <Spinner />
    </div>
  );
}
