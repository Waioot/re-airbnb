import { createBrowserRouter, Navigate } from 'react-router-dom';

import App from '@/App';
import Home from '@/views/home';
import Entire from '@/views/entire';
import Detail from '@/views/detail';
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
    ],
  },
]);

export default router;
