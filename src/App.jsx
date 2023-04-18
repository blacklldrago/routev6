
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Layout from './layout/Layout'

// FIRST WAY
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

//SECOND WAY

// const router = createBrowserRouter(
//   createRoutesFromElements(
    
//       <Route path = "/" element = {<Layout/>}>
//         <Route index element  = {<Home/>}/>
//         <Route path = "about" element = {<About/>}/>
//       </Route>
//   )
// )


function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
