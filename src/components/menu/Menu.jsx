import { MenuItem } from "./MenuItem";
import { Link } from "react-router";
import { useParams } from "react-router";
import { useGetDishesByRestaurantIdQuery } from "../../redux/services/api/api.js";

export const Menu = ({ showCounter }) => {
  const { restaurantId } = useParams();
  const {
    data,
    isLoading: isDishesLoading,
    isError: isDishesError,
  } = useGetDishesByRestaurantIdQuery(restaurantId);

  if (isDishesLoading) {
    return <h3>Загрузка меню...</h3>;
  }

  if (isDishesError) {
    return <h3>ОШИБКА загрузки меню...</h3>;
  }

  if (!data) {
    return null;
  }

  return (
    <ul>
      {data.map(({ id, name, ingredients, price }) => (
        <li key={id}>
          <Link to={`/dish/${id}`}>
            <MenuItem
              id={id}
              showCounter={showCounter}
              name={name}
              ingredients={ingredients}
              price={price}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
