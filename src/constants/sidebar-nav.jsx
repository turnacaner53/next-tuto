import { Home, Paperclip, Pizza, Server, UserCheck2, Webhook } from 'lucide-react';

export const SIDEBAR_NAV = [
  { path: '/', label: 'Home', icon: <Home /> },
  { path: '/blogs', label: 'Blogs', icon: <Paperclip /> },
  { path: '/user-management', label: 'User Management', icon: <UserCheck2 /> },
  { path: '/foot-recipe-app', label: 'Foot Recipes', icon: <Pizza /> },
  { path: '/server-data-fetch', label: 'Server Data Fetch', icon: <Server /> },
  { path: '/client-data-fetch', label: 'Client Data Fetch', icon: <Webhook /> },
];
