import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import { Routes } from '../enums/Route'

const HomeView = lazy(() => import('../views/HomeView'))
const AccountantsView = lazy(() => import('../views/AccountantsView'))
const ErrorView = lazy(() => import('../views/ErrorView'))

export const router = createBrowserRouter([
  {
    path: Routes.HomeView,
    element: <HomeView />,
    errorElement: <ErrorView />,
    children: [
      {
        path: Routes.AccountListView,
        element: <AccountantsView />,
        errorElement: <ErrorView />,
      },
    ],
  },
])