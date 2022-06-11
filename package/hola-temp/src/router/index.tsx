import { lazy, Suspense } from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Login from '../view/login';

const Dashboard = lazy(() => import('../view/dashboard'));

export const mainRoutes: RouteObject = {
    element: <MainLayout />,
    children: [
        {
            path: '/dashboard',
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <Dashboard />
                </Suspense>
            ),
        },
    ],
};

const routes: RouteObject[] = [
    {
        path: '/login',
        element: <Login />,
    },
    mainRoutes,
    {
        path: '/',
        element: <Navigate to="/dashboard" replace />,
    },
];

export default routes;
