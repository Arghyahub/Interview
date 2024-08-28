import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import "./App.css";
import HigherOrder from "./pages/higher-order-comp/HigherOrder";

const routes = [
  {
    path: "/HigherOrderComp",
    element: <HigherOrder />,
  },
  {
    path: "https://www.w3schools.com/react/react_lifecycle.asp",
    element: <></>,
  },
  {
    path: "https://www.scaler.com/topics/react/pure-component-in-react/",
    element: <></>,
  },
];

const router = createBrowserRouter([
  ...routes,
  { path: "/", element: <Home /> },
]);

function Home() {
  return (
    <div>
      <h1>Content</h1>
      <div className="flex flex-col">
        {routes.map((elem, idx) => (
          <Link to={elem.path} key={idx}>
            {elem.path}
          </Link>
        ))}
      </div>
    </div>
  );
}

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
