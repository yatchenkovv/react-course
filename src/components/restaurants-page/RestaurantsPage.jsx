import { useState } from "react";
import { Tabs } from "../tabs/Tabs";
import { RestaurantTabContainer } from "../restaurant-tab/restaurant-tab-container";
import { RestaurantCardContainer } from "../restaurant-card/RestaurantCardContainer";

export const RestaurantsPage = ({ restaurantsIds }) => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(
    restaurantsIds[0]
  );

  return (
    <>
      <Tabs>
        {restaurantsIds.map((id) => (
          <RestaurantTabContainer
            key={id}
            restaurantId={id}
            onClick={() => setSelectedRestaurantId(id)}
            disabled={id === selectedRestaurantId}
          />
        ))}
      </Tabs>
      <hr />
      <RestaurantCardContainer id={selectedRestaurantId} />
    </>
  );
};
