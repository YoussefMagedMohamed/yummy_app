import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Category from "./Components/Category/Category";
import Area from "./Components/Area/Area";
import RootLayout from "./Components/RootLayout/RootLayout";
import NotFound from "./Containers/NotFound/NotFound";
import Search from "./Components/Search/Search";
import ItemsCategory from "./Components/ItemsCategory/ItemsCategory";
import { ItemsArea } from "./Components/ItemsArea/ItemsArea";
import ItemDetails from "./Components/ItemDetails/ItemDetails";

function App() {
  let routers = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "category", element: <Category /> },
        { path: "area", element: <Area /> },
        { path: "search", element: <Search /> },
        { path: "itemDetails/:id", element: <ItemDetails /> },
        { path: "ItemsCategory", element: <ItemsCategory /> },
        { path: "itemsArea", element: <ItemsArea /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
