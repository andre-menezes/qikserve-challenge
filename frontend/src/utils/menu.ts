import { MenuItem } from '@/types';
import { lazy } from 'react';

export const menuList: MenuItem[] = [
  {
    title: 'Home',
    path: '/',
    component: lazy(() => import('@/pages/Home')),
    active: true,
  },
  {
    title: 'Entrar',
    path: '/login',
    component: lazy(() => import('@/pages/Login')),
    active: false,
  },
  {
    title: 'Contato',
    path: '/contact',
    component: lazy(() => import('@/pages/Contact')),
    active: false,
  },
];
