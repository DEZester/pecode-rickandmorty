import Header from './UI/header/Header';
import CharactersList from './charactersList/CharactersList';
import CharacterCard from './characterCard/CharacterCard';
import { Route, Routes } from 'react-router-dom';
import NotFound from './notFound/NotFound';
import EpisodesList from './episodes/EpisodesList';
import LocationsList from './locations/LocationsList';
import MyEpisodes from './myEpisodes/MyEpisodes';

const RickAndMorty = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/character/:id" element={<CharacterCard />} />
        <Route path="/episodes" element={<EpisodesList />} />
        <Route path="/locations" element={<LocationsList />} />
        <Route path="/myEpisodes" element={<MyEpisodes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default RickAndMorty;
