import Header from "./components/header/Header";
import CharactersList from "./components/charactersList/CharactersList";
import CharacterCard from "./components/characterCard/CharacterCard";
function App() {
  // const baseUrl = "https://rickandmortyapi.com/api/character";
  // const fetchRickMorty = () =>
  //   fetch(baseUrl)
  //     .then((response) => response.json())
  //     .then((result) => console.log(result));
  // useEffect(() => {
  //   fetchRickMorty();
  // }, []);
  return (
    <div className="app">
      <Header />
      {/* <CharactersList /> */}
      <CharacterCard />
    </div>
  );
}

export default App;
