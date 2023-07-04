import {
  createBrowserRouter,
  json,
  RouterProvider,
} from "react-router-dom";
import Main from "./pages/Main/Main"
import Error from "./pages/Error/Error"
import Login from "./pages/Login/Login";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {



  const student = {
    account: "2020211802",
    password: "2020211802",
  }

  

  useEffect(() => {
    localStorage.setItem("student", JSON.stringify(student));
  },[])



  const router = createBrowserRouter([
    {
      path: "main",
      element: <Main />,
      errorElement: <Error />,
    },
    {
      path: "/",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "change",
      element: <ChangePassword />,
      errorElement: <Error />,
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App