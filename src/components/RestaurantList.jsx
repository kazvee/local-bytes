import restaurants from '../data/restaurants.json';

function RestaurantList() {
  return (
    <div>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <p>{restaurant.name}</p>
            <p>{restaurant.cuisine}</p>
            <p>{restaurant.postcode}</p>
            <p>{restaurant.recommended.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantList;
