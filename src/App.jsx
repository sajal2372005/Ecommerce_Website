import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import AppProvider from './context/Context.jsx';

const Layout = () => {
  return(
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
])

const App =() => {
  return(
    <>
    <AppProvider>
      <RouterProvider router={router}/>
    </AppProvider>
    </>
  )
}
export default App;