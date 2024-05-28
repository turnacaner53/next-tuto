'use client';

import ModeToggle from '@/components/ThemeModeToggle';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className='flex min-h-screen flex-col items-center gap-4 p-24'>
      <h1>Welcome Next Js</h1>
      <ModeToggle />
      <div className='flex items-center gap-2'>
        <Link className='rounded-sm border p-4 hover:bg-slate-600' href='/products'>
          Product
        </Link>
        <Link className='rounded-sm border p-4 hover:bg-slate-600' href='/account'>
          Account
        </Link>
        <Button variant='link' size='lg' onClick={() => router.push('/products/5')}>
          Navigate use Router
        </Button>
      </div>
    </main>
  );
}
