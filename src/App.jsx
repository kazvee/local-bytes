import './App.css';
import RestaurantList from './components/RestaurantList';

function App() {
  return (
    <>
      <h1>LocalBytes</h1>
      <h2>Welcome to LocalBytes</h2>
      <h3>
        Browse our curated list of local restaurants, or search by name,
        cuisine, or recommended dishes
      </h3>
      <RestaurantList />
    </>
  );
}

export default App;
