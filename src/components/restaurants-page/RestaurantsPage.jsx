import { useState } from "react";
import { RestaurantCard } from "../restaurant-card/RestaurantCard";
import styles from "./Restaurants-page.module.css";
import classNames from "classnames";

export const RestaurantsPage = ({ restaurants }) => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(
    restaurants[0].id
  );

  const selectedRestaurant = restaurants.find(
    (restaurant) => restaurant.id === selectedRestaurantId
  );
  return (
    <>
      <ul className={styles.list}>
        {restaurants.map((restaurant) => (
          <li
            className={classNames(styles.restaurantCard, {
              [styles.activeCard]: restaurant.id === selectedRestaurantId,
            })}
            key={restaurant.id}
            onClick={() => setSelectedRestaurantId(restaurant.id)}
          >
            <h3>{restaurant.name}</h3>
          </li>
        ))}
      </ul>
      <hr />
      <RestaurantCard restaurant={selectedRestaurant} />
    </>
  );
};
