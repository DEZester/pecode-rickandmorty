import Header from "./header/Header";
import CharactersList from "./charactersList/CharactersList";
import CharacterCard from "./characterCard/CharacterCard";
import { Route, Routes } from "react-router-dom";
import NotFound from "./notFound/NotFound";
import EpisodesList from "./episodes/EpisodesList";
import Locations from "./locations/Locations";

const RickAndMorty = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/character/:id" element={<CharacterCard />} />
        <Route path="/episodes" element={<EpisodesList />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default RickAndMorty;
