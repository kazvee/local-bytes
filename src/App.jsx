import { useState } from 'react';
import NavigationBar from './components/Navbar';
import RestaurantList from './components/RestaurantList';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <NavigationBar onSearch={handleSearch} />
      <RestaurantList searchQuery={searchQuery} />
      <Footer />
    </>
  );
}

export default App;
