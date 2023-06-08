import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Root from "./pages/Root";
import Home, { loader as mainLoader } from "./pages/Home";
import Details, { loader as detailsLoader } from "./pages/Details";
import Error from "./pages/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Navigate to="/pokemons/1" replace /> },
      { path: "/pokemons/:page", element: <Home />, loader: mainLoader },
      { path: "/pokemon/:name", element: <Details />, loader: detailsLoader },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
