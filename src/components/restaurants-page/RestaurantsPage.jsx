import { useState } from "react";
import { RestaurantCard } from "../restaurant-card/RestaurantCard";

export const RestaurantsPage = ({ restaurants }) => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(
    restaurants[0].id
  );

  const selectedRestaurant = restaurants.find(
    (restaurant) => restaurant.id === selectedRestaurantId
  );
  return (
    <div>
      <ul
        style={{
          display: "flex",
          gap: "15px",
          listStyle: "none",
          margin: "15px",
        }}
      >
        {restaurants.map((restaurant) => (
          <li
            key={restaurant.id}
            style={{
              cursor: "pointer",
              padding: "10px",
              border: "solid 1px silver",
              backgroundColor:
                restaurant.id === selectedRestaurantId ? "silver" : "white",
            }}
            onClick={() => setSelectedRestaurantId(restaurant.id)}
          >
            <h3>{restaurant.name}</h3>
          </li>
        ))}
      </ul>
      <hr />
      <RestaurantCard restaurant={selectedRestaurant} />
    </div>
  );
};
