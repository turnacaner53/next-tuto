'use client';

import { useState } from 'react';

import ModeToggle from '@/components/ThemeModeToggle';
import { SIDEBAR_NAV } from '@/constants/sidebar-nav';
import { CircleUser, Menu, Package2 } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import MenuItem from './MenuItem';
import SidebarFooter from './SidebarFooter';

const Header = () => {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <header className='flex h-14 items-center gap-4 border-b bg-muted/30 px-4 lg:h-[60px] lg:px-6'>
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <Button variant='outline' size='icon' className='shrink-0 md:hidden'>
            <Menu className='h-5 w-5' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left' className='flex flex-col'>
          <Link href='/' className='flex items-center gap-4 text-lg font-semibold'>
            <Package2 className='h-6 w-6' />
            <span>React</span>
          </Link>
          <nav className='no-scrollbar grid gap-2 overflow-auto text-lg font-medium'>
            <div className='mt-2'>
              {SIDEBAR_NAV.map((item, index) => (
                <MenuItem key={index} item={item} sheetOnClick={() => setSheetOpen(false)} />
              ))}
            </div>
          </nav>
          <div className='mt-auto'>
            <SidebarFooter />
          </div>
        </SheetContent>
      </Sheet>
      <div className='w-full flex-1'>
        <h1>Next JS</h1>
      </div>
      <ModeToggle />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='secondary' size='icon' className='rounded-full'>
            <CircleUser className='h-5 w-5' />
            <span className='sr-only'>Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

Header.propTypes = {};

export default Header;
