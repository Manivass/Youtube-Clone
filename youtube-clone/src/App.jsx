import Header from "./Componenta/Header";
import Body from "./Componenta/Body";
import { Provider } from "react-redux";
import Store from "./utils/store";
const App = () => {
  return (
    <div className="">
      <Provider store={Store}>
        <Header />
        <Body />
      </Provider>
    </div>
  );
};
export default App;
