import { RouterProvider, createHashRouter } from "react-router-dom";
import Root from "./pages/Root.js";
import "./App.css";
import HomePage from "./pages/homepage/HomePage.js";
import Error from "./pages/error/Error.js";
import ShopPage from "./pages/shop/ShopPage.js";
import SingleItem from "./pages/shop/SingleItem.js";
import CartPage from "./pages/cartpage/CartPage.js";
import Checkout from "./pages/checkout/Checkout.js";
import Success from "./pages/checkout/stripe-checkout/Success.js";
import Canceled from "./pages/checkout/stripe-checkout/Canceled.js";
import Signup from "./pages/auth/Signup.js";
import Signin from "./pages/auth/Signin.js";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "shop",
          element: <ShopPage />,
        },
        { path: "product/:productId", element: <SingleItem /> },
        { path: "cart", element: <CartPage /> },
        { path: "checkout", element: <Checkout /> },
        { path: "success", element: <Success /> },
        { path: "canceled", element: <Canceled /> },
        { path: "signup", element: <Signup /> },
        { path: "signin", element: <Signin /> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
