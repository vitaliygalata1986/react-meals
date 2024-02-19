import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ContextProvider } from './context/context';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Recipe from './pages/Recipe';
import Category from './pages/Category';
import Random from './pages/Random';
import NotFound from './pages/NotFound';
import './index.css';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/contacts',
          element: <Contact />,
        },
        {
          path: '/random',
          element: <Random />,
        },
        {
          path: '/category/:name',
          element: <Category />,
        },
        {
          path: '/meal/:id',
          element: <Recipe />,
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ],
  {
    basename: '/react-food',
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
);
