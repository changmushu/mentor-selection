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
import HasChoose from "./pages/HasChoose/HasChoose";
import Teacher from "./pages/Teacher/Teacher";
import ChangePasswordT from "./pages/ChangePasswordT/ChangePasswordT";

function App() {



  const student = {
    account: "2020211802",
    password: "2020211802",
    
  }

  const teacherA = {
    account: "admin",
    password: "admin",
  }

  useEffect(() => {
    localStorage.setItem("student", JSON.stringify(student));
    localStorage.setItem("teacherA", JSON.stringify(teacherA));
  }, [])



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
    },
    {
      path: "main/choose",
      element: <HasChoose />,
      errorElement: <Error />,
    },
    {
      path: "teacher",
      element: <Teacher />,
      errorElement: <Error />
    },
    {
      path:"teacher/change",
      element:<ChangePasswordT/>,
      errorElement:<Error/>,
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App