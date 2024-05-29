'use client';

import { SIDEBAR_NAV } from '@/constants/sidebar-nav';
import { Package2 } from 'lucide-react';
import Link from 'next/link';

import MenuItem from './MenuItem';
import SidebarFooter from './SidebarFooter';

const Sidebar = () => {
  return (
    <div className='hidden border-r bg-muted/30 md:block'>
      <div className='flex h-full max-h-screen flex-col gap-2'>
        {/* SIDEBAR HEADER */}
        <div className='flex h-14 items-center border-b bg-muted/30 px-4 lg:h-[60px] lg:px-6'>
          <Link href='/' className='flex items-center gap-2 font-semibold'>
            <Package2 className='h-6 w-6' />
            <span className=''>Next Js Tutorial</span>
          </Link>
        </div>
        {/* SIDEBAR NAVLINKS */}
        <div className='flex-1 overflow-y-hidden hover:overflow-y-auto'>
          <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
            {SIDEBAR_NAV.map((item, index) => (
              <MenuItem key={index} item={item} />
            ))}
          </nav>
        </div>
        {/* SIDEBAR FOOTER */}
        <div className='flex-none p-4'>
          <SidebarFooter />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
