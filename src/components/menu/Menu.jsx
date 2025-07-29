import { MenuItem } from "./MenuItem";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice.js";

export const Menu = ({ showCounter }) => {
  const { restaurantId } = useParams();

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return (
    <ul>
      {restaurant &&
        restaurant.menu.map((id) => (
          <li key={id}>
            <Link to={`/dish/${id}`}>
              <MenuItem id={id} showCounter={showCounter} />
            </Link>
          </li>
        ))}
    </ul>
  );
};
