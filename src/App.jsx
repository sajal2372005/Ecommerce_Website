import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import AppProvider from './context/Context.jsx';
import SignUp from './components/SignUp.jsx';
import Products from './components/Products.jsx';
import Cart from './components/cart.jsx';
import Admin from './components/admin.jsx';
import InvoicePreviewPage from './components/PDFViewer.jsx';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: "/Pdf",
        element: <InvoicePreviewPage />
      }
    ]
  },
  {
    path: '/admin',
    element: <Admin />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/SignUp',
    element: <SignUp />
  }
])

const App = () => {
  return (
    <>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </>
  )
}
export default App;