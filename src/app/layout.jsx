import { Suspense } from 'react';

import ReactQueryProvider from '@/components/ReactQueryProvider';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Inter } from 'next/font/google';

import MainLayout from './_layout/MainLayout';
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
        <ReactQueryProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange>
            <MainLayout>
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </MainLayout>
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
