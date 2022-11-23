import Header from "./components/header/Header";

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
    </div>
  );
}

export default App;
