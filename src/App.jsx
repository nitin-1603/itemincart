import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Cart from "./components/Cart";

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <><Navbar /> <Card /></>
    },
    {
      path: '/cart', element: <><Navbar /> <Cart /></>
    }
  ])
  return (

    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
