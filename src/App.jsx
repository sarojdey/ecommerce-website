import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";
import SearchResult from "./pages/SearchResult";
import WishList from "./pages/WishList";
import RootLayout from "./Layouts/RootLayout";
import PageNotFound from "./pages/PageNotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route
          path="/search/:categories/:keyword"
          element={<SearchResult />}
        ></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
      </Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Route>
  )
);

function App() {
  return (
    <div className="overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
