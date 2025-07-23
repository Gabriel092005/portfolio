
import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './pages/_layouts/app';
import { DashBoardAdmin } from './pages/app/dashboard-admin/dashboard-admin';


export const router = createBrowserRouter([

  {
    path: '/',
    element: <AppLayout/>,
    children: [
      { path: '/', element: <DashBoardAdmin /> },
    ],
  },

]);
