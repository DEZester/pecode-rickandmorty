import charactersReducer from "./components/charactersList/features/characters.reducer";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import characterReducer from "./components/characterCard/features/character.reducer";
import episodesReducer from "./components/episodes/features/episodes.reducer";
import locationsReducer from "./components/locations/features/locations.reducer";

const reducer = combineReducers({
  characters: charactersReducer,
  character: characterReducer,
  episodes: episodesReducer,
  locations: locationsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
