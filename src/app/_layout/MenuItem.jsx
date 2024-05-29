'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';

const MenuItem = ({ item, sheetOnClick = () => {} }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = pathname === item.path;

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  const mainLink = () => {
    setSubMenuOpen(false);
    sheetOnClick();
  };

  return (
    <>
      {item?.subMenu ? (
        <>
          <Link
            onClick={toggleSubMenu}
            href={item.path}
            className={cn(
              `flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`,
              isActive && `bg-purple-800 text-white dark:bg-purple-500`,
            )}>
            <div className='flex flex-row items-center  space-x-4'>
              {item.icon}
              <span className=''>{item.label}</span>
            </div>
            <ChevronDown className={`${subMenuOpen ? 'rotate-180' : ''} flex`} size={16} />
          </Link>

          {subMenuOpen && item?.subMenu && item?.subMenuItems && (
            <div className='my-2 ml-6 flex flex-col space-y-1'>
              {item.subMenuItems &&
                item?.subMenuItems?.map((subItem, i) => {
                  return (
                    <Link
                      key={i}
                      onClick={sheetOnClick}
                      href={subItem.path}
                      className={`${subItem.path === pathname && 'bg-purple-800 font-bold text-white dark:bg-purple-500'} flex items-center gap-2 rounded-lg px-2 py-1 text-muted-foreground transition-all hover:text-primary`}>
                      <span className='h-6'>{subItem.icon}</span>
                      {subItem.label}
                    </Link>
                  );
                })}
            </div>
          )}
        </>
      ) : (
        <Link
          onClick={mainLink}
          href={item.path}
          className={cn(
            `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`,
            isActive && `bg-purple-800 text-white dark:bg-purple-500`,
          )}>
          <span>{item.icon}</span>
          {item.label}
        </Link>
      )}
    </>
  );
};

MenuItem.propTypes = {
  path: PropTypes.string,
  icon: PropTypes.node,
  label: PropTypes.string,
};

export default MenuItem;
