import { createBrowserRouter, Navigate } from 'react-router-dom';

import App from '@/App';
// import Home from '@/views/home';
// import Entire from '@/views/entire';
// import Detail from '@/views/detail';
// import Demo from '@/views/demo';
import { lazy } from 'react';
const Home = lazy(() => import('@/views/home'));
const Entire = lazy(() => import('@/views/entire'));
const Detail = lazy(() => import('@/views/detail'));
const Demo = lazy(() => import('@/views/demo'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, // 添加默认路由
        element: <Navigate to='/home' replace={true} />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/entire',
        element: <Entire />,
      },
      {
        path: '/detail',
        element: <Detail />,
      },
      {
        path: '/demo',
        element: <Demo />,
      },
    ],
  },
]);

export default router;
