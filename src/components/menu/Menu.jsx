import { MenuItem } from "./MenuItem";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice.js";
import { useRequest } from "../../redux/hooks/use-request.js";
import { getDishesByRestaurantId } from "../../redux/entities/dishes/get-dishes-by-restaurant-id.js";
import { IDLE, PENDING } from "../../constants/request-status.js";

export const Menu = ({ showCounter }) => {
  const { restaurantId } = useParams();

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  const requestStatus = useRequest(getDishesByRestaurantId, restaurantId);

  if (requestStatus === IDLE || requestStatus === PENDING) {
    return <h3>Загрузка меню...</h3>;
  }

  if (!restaurant) {
    return null;
  }

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
