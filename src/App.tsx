import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Home from "./pages/home";
import RoomDetails from "./pages/roomDetails";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Room from "./components/pages/rooms";
import Spa from "./components/pages/spa";
import Restaurant from "./components/pages/resturant";
import Contact from "./components/pages/contact";

// Layout component to wrap pages with Header & Footer
const Layout = () => (
  <>
    <Header />
    <Outlet /> {/* Renders the current route */}
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use Layout as wrapper
    children: [
      { path: "/", element: <Home /> },
      { path: "/room/:id", element: <RoomDetails /> },
      { path: "/rooms", element: <Room /> },
      { path: "/spa", element: <Spa /> },
      { path: "/restaurant", element: <Restaurant /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
