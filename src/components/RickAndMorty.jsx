import Header from "./header/Header";
import CharactersList from "./charactersList/CharactersList";
import CharacterCard from "./characterCard/CharacterCard";

const RickAndMorty = () => {
  return (
    <div className="app">
      <Header />
      <CharactersList />
      {/* <CharacterCard /> */}
    </div>
  );
};

export default RickAndMorty;
