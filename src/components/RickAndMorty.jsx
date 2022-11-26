import Header from "./header/Header";
import CharactersList from "./charactersList/CharactersList";
import CharacterCard from "./characterCard/CharacterCard";
import { Route, Routes } from "react-router-dom";
import NotFound from "./notFound/NotFound";

const RickAndMorty = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/:id" element={<CharacterCard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default RickAndMorty;
