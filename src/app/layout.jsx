import { Suspense } from 'react';

import { ThemeProvider } from '@/components/ThemeProvider';
import { Inter } from 'next/font/google';

import Header from './_layout/Header';
import Sidebar from './_layout/Sidebar';
import './globals.css';
import Loading from './loading';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next JS Tutorial',
  description: 'Nex Js learning tutorial',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <div className='grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
            <Sidebar />
            <div className='flex h-screen flex-col overflow-hidden'>
              <Header />
              <main className='flex flex-1 flex-col gap-4 overflow-y-auto overflow-x-hidden p-4 lg:gap-6 lg:p-6'>
                <Suspense fallback={<Loading />}>{children}</Suspense>
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
