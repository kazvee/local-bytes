import { useState } from 'react';
import NavigationBar from './components/Navbar';
import About from './components/About';
import RestaurantList from './components/RestaurantList';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAbout, setShowAbout] = useState(false);

  const handleSearch = (query) => setSearchQuery(query);

  return (
    <>
      <NavigationBar onSearch={handleSearch} />
      {showAbout ? <About /> : <RestaurantList searchQuery={searchQuery} />}
      <Footer onAboutClick={() => setShowAbout(true)} />
    </>
  );
}

export default App;