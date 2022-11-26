import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import RickAndMorty from "./components/RickAndMorty";
import store from "./store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <RickAndMorty />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
