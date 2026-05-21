import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import MenuDisplay from "./components/MenuDisplay.jsx";
import MenuOptions from "./components/MenuOptions.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/location",
        element: <Home />,
      },
      { path: "/menu", element: <MenuDisplay /> },
      { path: "/cart", element: <MenuOptions /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;