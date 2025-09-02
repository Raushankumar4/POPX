import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signup from "./Auth/SignUp";
import SignIn from "./Auth/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "profile", element: <Profile /> },
      { path: "signUp", element: <Signup /> },
      { path: "signIn", element: <SignIn /> },
    ],
  },
]);
