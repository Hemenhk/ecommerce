import { RouterProvider, createHashRouter } from "react-router-dom";
import Root from "./pages/Root.js";
import "./App.css";
import HomePage from "./pages/homepage/HomePage.js";
import Error from "./pages/error/Error.js";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [{ index: true, element: <HomePage /> }],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
