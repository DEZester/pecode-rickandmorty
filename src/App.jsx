import { Provider } from "react-redux";
import RickAndMorty from "./components/RickAndMorty";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <RickAndMorty />
    </Provider>
  );
}

export default App;
