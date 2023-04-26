import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Nothing from "./pages/Nothing/Nothing";
import UserById from "./pages/UserById/UserById";
import Layout from "./layout/Layout";


// FIRST WAY
const routerForAdmin = createBrowserRouter([
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
        element:<About/>
      },
      {
        path: "user/:id",
        element: <UserById />,
      },
      {
        path: "*",
        element: <Nothing />,
      },
    ],
  },
]);

const routerForStudent = createBrowserRouter([
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
        element:<About/>
      },
      {
        path: "*",
        element: <Nothing />,
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
//         <Route path = "user/:id" element = {<UserById/>}/>
//         <Route path = "*" element = {<Nothing/>}/>
//       </Route>
//   )
// )

function App() {
  let user = {
    role: 1
  }

  let routes = {
    0: <RouterProvider router={routerForAdmin} />,
    1: <RouterProvider router={routerForStudent} />,
  }
  return <>
    {routes[user.role]}
  </>;
}
export default App;
