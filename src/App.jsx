import ViewCreator from "./pages/ViewCreator";
import EditCreator from "./pages/EditCreator";
import AddCreator from "./pages/AddCreator";
import ShowCreators from "./pages/ShowCreators";
import { useRoutes } from "react-router-dom";

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <ShowCreators /> },
    { path: "/creator/:id", element: <ViewCreator /> },
    { path: "/edit/:id", element: <EditCreator /> },
    { path: "/new", element: <AddCreator /> },
  ]);

  return routes;
};

export default App;
