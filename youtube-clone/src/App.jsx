import Header from "./Componenta/Header";
import Body from "./Componenta/Body";
import { Provider } from "react-redux";
import Store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VediosCards from "./Componenta/VediosCards";
import VedioButton from "./Componenta/VedioButton";
import WatchPage from "./Componenta/WatchPage";
const App = () => {
  console.log("FULL STORE:", Store.getState());
  const RouteApp = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <VediosCards />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);
  return (
    <div className="">
      <Provider store={Store}>
        <Header />
        <RouterProvider router={RouteApp} />
      </Provider>
    </div>
  );
};
export default App;
