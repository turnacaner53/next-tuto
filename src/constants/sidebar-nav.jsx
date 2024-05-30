import { Home, Leaf, Server, Webhook } from 'lucide-react';

export const SIDEBAR_NAV = [
  { path: '/', label: 'Home', icon: <Home /> },
  { path: '/products', label: 'Products', icon: <Leaf /> },
  { path: '/server-data-fetch', label: 'Server Data Fetch', icon: <Server /> },
  { path: '/client-data-fetch', label: 'Client Data Fetch', icon: <Webhook /> },
];
