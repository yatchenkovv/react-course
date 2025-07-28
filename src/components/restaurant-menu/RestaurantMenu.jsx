import { Menu } from "../menu/Menu";

export const RestaurantMenu = ({ restaurant }) => {
  return <Menu menuIds={restaurant.menu} showCounter={false} />;
};
