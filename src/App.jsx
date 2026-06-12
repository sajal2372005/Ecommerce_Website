import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Home from './components/Home.jsx';

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
  }
])

const App =() => {
  return(
    <>
      <RouterProvider router={router}/>
    </>
  )
}
export default App;