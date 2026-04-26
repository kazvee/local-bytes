import { useState } from 'react';
import NavigationBar from './components/Navbar';
import About from './components/About';
import Analytics from './components/Analytics';
import Privacy from './components/Privacy';
import FoodSpotList from './components/FoodSpotList';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAbout, setShowAbout] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const handleSearch = (query) => setSearchQuery(query);

  return (
    <>
      <NavigationBar onSearch={handleSearch} />
      {showAbout ? <About /> : showPrivacy ? <Privacy /> : <FoodSpotList searchQuery={searchQuery} />}
      <Footer
        onAboutClick={() => {
          setShowPrivacy(false);
          setShowAbout(true);
        }}
        onPrivacyClick={() => {
          setShowAbout(false);
          setShowPrivacy(true);
        }}
      />
      <Analytics />
    </>
  );
}

export default App;