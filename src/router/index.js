import { createBrowserRouter } from 'react-router-dom';

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
